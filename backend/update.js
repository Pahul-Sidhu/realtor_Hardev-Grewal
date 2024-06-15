const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const { storeListings } = require("./db");
const { logError } = require("./db");
const { logSuccessful } = require("./db");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getProperties = async (type, link) => {
  console.log(`Scraping ${type} properties... for link: ${link}`);
  let properties = [];
  let browser;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(link);

    // Wait for the frames to load
    await page.waitForSelector("frame");

    // Get all frames
    let frames = page.frames();

    // Assuming the first actual frame (frames[1]) is where the search button is located
    let searchFrame = frames[1];
    if (type == "attached") {
      await searchFrame.click("#PropertyType_chk1");
      await delay(5000);
    }

    // Click the search button
    await searchFrame.click("#m_btnSearchBottom");

    // Wait for the anchor element to be present and clickable
    const anchorSelector = "a[href='javascript:;']";

    await searchFrame.waitForSelector(anchorSelector, {
      visible: true,
      timeout: 30000,
    });

    // Scroll the element into view if necessary
    await searchFrame.evaluate((anchorSelector) => {
      document.querySelector(anchorSelector).scrollIntoView();
    }, anchorSelector);

    await delay(1000);

    // Click the anchor element
    // Use evaluate to ensure the click happens in the correct context
    await searchFrame.evaluate((anchorSelector) => {
      document.querySelector(anchorSelector).click();
    }, anchorSelector);

    //first listing
    await searchFrame.waitForSelector("#imgAgent");

    while (true) {
      scrape(searchFrame, type, properties);

      // Check if there's an anchor to show the next view
      let anchor = await searchFrame.$("a[href*='javascript:showNextView']");

      if (!anchor) {
        break; // Exit the loop if no more anchors are found
      }

      await searchFrame.click("a[href*='javascript:showNextView']");
      await delay(5000); // Wait for 5 seconds before continuing
    }
  } catch (error) {
    console.error("Error scraping listings:", error);
    if (browser) {
      await browser.close();
    }
    await logError();
  } finally {
    if (browser) {
      await browser.close();
    }

    console.log(`Scraped ${properties.length} ${type} properties`);

    await logSuccessful();
    // Store the listings in the database
    return properties;
  }
};

// Scrape the listing details
const scrape = async (searchFrame, type, properties) => {
  const page = await searchFrame.content();
  const $ = cheerio.load(page);

  //Get Images
  // Extract image links
  const imageLinks = [];

  // Extract image links from input field `aryPicDataSpinner0`
  const aryPicDataSpinner0 = $("#aryPicDataSpinner0").val();
  if (aryPicDataSpinner0) {
    const links = aryPicDataSpinner0.split(",");
    imageLinks.push(...links);
  }
  imageLinks.push($('div[style*="top:28px"]').find("img").attr("src"));
  let propertyListing = {};
  // Extract data

  if (type == "detached") {
    propertyListing = {
      images: imageLinks,
      status: $('div[style*="top:96px"]').text().trim(),
      mlsNumber: $('div[style*="top:16px;left:390px"]').text().trim(),
      price: $('div[style*="top:32px"]').text().trim(),
      type: $('div[style*="top:128px"]').text().trim(),
      address: $('div[style*="top:320px;left:170px"]').text().trim(),
      area: $('div[style*="top:336px;left:170px"]').text().trim(),
      subArea: $('div[style*="top:320px;left:550px"]').text().trim(),
      listPrice: $('div[style*="top:336px;left:550px"]').text().trim(),
      bedrooms: $('div[style*="top:368px;left:170px"]').text().trim(),
      bathrooms: $('div[style*="top:368px;left:550px"]').text().trim(),
      floorArea: $('div[style*="top:384px;left:170px"]').text().trim(),
      lotSize: $('div[style*="top:400px;left:170px"]').text().trim(),
      basement: $('div[style*="top:384px;left:550px"]').text().trim(),
      yearBuilt: $('div[style*="top:400px;left:550px"]').text().trim(),
      amenities: $('div[style*="top:448px;left:160px"]').text().trim(),
      featuresIncluded: $('div[style*="top:496px;left:160px"]').text().trim(),
      description: $('div[style*="top:544px;left:20px"]').text().trim(),
    };
  } else {
    propertyListing = {
      images: imageLinks,
      status: $('div[style*="top:80px"]').text().trim(),
      mlsNumber: $('div[style*="top:16px;left:390px"]').text().trim(),
      price: $('div[style*="top:32px"]').text().trim(),
      type: $('div[style*="top:112px"]').text().trim(),
      address: $('div[style*="top:320px;left:170px"]').text().trim(),
      area: $('div[style*="top:336px;left:170px"]').text().trim(),
      subArea: $('div[style*="top:320px;left:540px"]').text().trim(),
      listPrice: $('div[style*="top:336px;left:540px"]').text().trim(),
      bedrooms: $('div[style*="top:368px;left:170px"]').text().trim(),
      bathrooms: $('div[style*="top:384px;left:170px"]').text().trim(),
      floorArea: $('div[style*="top:400px;left:170px"]').text().trim(),
      amenities: $('div[style*="top:464px;left:170px"]').text().trim(),
      featuresIncluded: $('div[style*="top:512px;left:170px"]').text().trim(),
      description: $('div[style*="top:560px;left:20px"]').text().trim(),
    };
  }

  if (propertyListing && !properties.includes(propertyListing)) {
    properties.push(propertyListing);
  }
};

const scrapeLinks = async () => {
  const links = [
    "http://bcres.paragonrels.com/idx/idx.aspx?Mls=BCRES&Subscriber=94e6f123-c8a3-4162-9cbb-cc2b880751d9&Featured=3",
    "http://bcres.paragonrels.com/idx/idx.aspx?Mls=BCRES&Subscriber=94e6f123-c8a3-4162-9cbb-cc2b880751d9",
  ];
  
  let attachedProperties = [];
  let detachedProperties = [];
  // Scrape the detached properties
  detachedProperties = detachedProperties.concat(await getProperties("detached", links[0]));
  detachedProperties = detachedProperties.concat(await getProperties("detached", links[1]));
  console.log(detachedProperties.length)
  await storeListings("detached", detachedProperties);

  // Scrape the attached properties
  attachedProperties = attachedProperties.concat(await getProperties("attached", links[0]));
  attachedProperties = attachedProperties.concat(await getProperties("attached", links[1]));
  console.log(attachedProperties.length)  
  await storeListings("attached", attachedProperties);
};


module.exports = { scrapeLinks };
