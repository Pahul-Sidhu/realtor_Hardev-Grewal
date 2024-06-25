let listings = { attached: [], detached: [] };
let currentPage = 1;
const itemsPerPage = 10; // Number of items to display per page
let currentSortOption = "";

function createListingItem(property) {
  const li = document.createElement("li");
  li.className = "mrp-listing-result photo-overlay";

  const mainImage = property.images[0];

  li.innerHTML = `
      <h3 class="listing-item-entry-title">${property.address} in ${
    property.area
  }</h3>
      <alt>
        <span class="alt-addr">${property.address}</span>
        <span class="alt-subarea">${property.area}</span>
        <span class="alt-city">${property.subArea}</span>
        <span class="alt-postal-code">${property.mlsNumber}</span>
      </alt>
      <div class="listing-image-and-toolbar-wrapper">
        <div class="listing-item-top-menu">
          <div class="inner">
            <span class="recip-logo-required"></span>
            <span class="btn contact-info-tab" title="Contact"></span>
          </div>
        </div>
        <div class="mrp-listing-main-image-container" data-banner="">
          <span class="results-ribbon"></span>
          <div class="inner">
            <img src="https:${mainImage}" data-src="https:${mainImage}" alt="Main Photo: ${
    property.address
  }" class="mrp-listing-main-image mrp-listing-main-photo unveil">
          </div>
        </div>
      </div>
      <div class="mrp-listing-address-info">
        <h3>
          <a title="${property.address}" href="./listing.html" class="property-link">
            ${property.address}
            <span class="mrp-listing-minor-address-info">
              ${property.area}
              <span class="mrp-listing-list-subarea">${property.subarea}</span>
            </span>
          </a>
        </h3>
      </div>
      <div class="mrp-listing-price-container">$${property.price.toLocaleString()}</div>
      <div class="summary-property-type"><span>${property.type}</span></div>
      <div class="mrp-listing-summary-outer">
        <div class="mrp-listing-summary-section clearfix">
          <div class="summary-status">
            <dt class="status-line">Status:</dt>
            <dd class="status-line"><span>Active</span></dd>
          </div>
          <div class="summary-mls-number">
            <dt class="mls-num-line">MLS&reg; Num:</dt>
            <dd class="mls-num-line"><span>${property.mlsNumber}</span></dd>
          </div>
          <div class="summary-bedrooms">
            <span class="bedrooms-line">Bed:</span>
            <dd class="bedrooms-line"><span>${property.bedrooms}</span></dd>
          </div>
          <div class="summary-bathrooms">
            <span class="bathrooms-line">Bath:</span>
            <dd class="bathrooms-line"><span>${property.bathrooms}</span></dd>
          </div>
          <div class="summary-floor-area">
            <dt class="floor-area-line">Floor Area:</dt>
            <dd class="floor-area-line"><span>${property.floorArea}</span></dd>
          </div>
        </div>
      </div>
      <div class="mrp-description-and-attribution-wrapper">
        <div class="mrp-listing-description">
          <span class="inner">${property.description}</span>
          <a class="more-details property-link" title="${
            property.address
          }" href="./listing.html">More details</a>
          <span class="full-text-tab" data-target="modal-open"></span>
        </div>
        <div class="mrp-listing-attribution-wrapper">
          <div class="mrp-listing-attribution-container" title="Listed by">Listed by</div>
        </div>
        <div class="mrp-listing-recip-logo">
          <img src="./media/images/icon-gv-recip-standard.gif" class="small-recip-logo" border="0" alt="Reciprocity Logo" crossorigin="anonymous">
        </div>
      </div>
      <div class="mrp-listing-details-link">
        <a title="${property.address}" href="./listing.html">LISTING DETAILS</a>
      </div>
      <div class="mrp-listing-links-section">
        <a class="menu-handle property-link" href="#" id="property-detail"></a>
      </div>
      <div class="mrp-owner-contact-container">
        <div class="listing-contact-info">
          <ul class="listing-contact-info-wrapper">
            <li class="contact-name">HARDEV GREWAL</li>
            <li class="contact-office">Real Estate Professionals Inc.</li>
            <li class="contact-phone">
              <a href="tel:1 (604) 5003920">1 (604) 5003920</a>
            </li>
            <li class="contact-email">
              <a class="mrp-listing-link" data-event="mrp.listing.contact">Contact by Email</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mrp-listing-result-overlay blue listing-description on" style="display:none;">
        <div class="inner">
         ${property.description}
         </div>
         <span class="close" id="close-blue"  data-target="modal"></span>
      </div>
    `;

    li.querySelectorAll('.property-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const serializedProperty = encodeURIComponent(JSON.stringify(property));
        const url = `./listing.html?property=${serializedProperty}`;
        window.location.href = url;
      });
    });

    li.getElementsByClassName("contact-info-tab")[0].addEventListener("click", function () {
      // initialize the phone call action
      window.open('tel:6045003920');
      
    }
    );

  return li;
}

function parsePrice(priceString) {
  return parseFloat(priceString.replace(/[^0-9.-]+/g, ""));
}

function parseArea(areaString) {
  return parseFloat(areaString.replace(/[^0-9.-]+/g, ""));
}

async function fetchListings() {
  try {
    if (listings.attached.length !== 0 && listings.detached.length !== 0) {
      return;
    }
    await login();
    const response = await fetch("http://localhost:8000/getlistings", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    listings = await response.json();

    // Parse the price and area strings to numbers
    listings.attached.forEach((property) => {
      property.price = parsePrice(property.price);
      property.floorArea = parseArea(property.floorArea);
    });

    listings.detached.forEach((property) => {
      property.price = parsePrice(property.price);
      property.floorArea = parseArea(property.floorArea);
    });
    console.log("Listings fetched:", listings);
  } catch (error) {
    console.error("Error:", error);
    throw error; // rethrow the error so it can be handled by the caller
  }
}

function sortProperties(properties, sortOption) {
  switch (sortOption) {
    case "0":
      return properties.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    case "1":
      return properties.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    case "2":
      return properties.sort(
        (a, b) => parseFloat(a.floorArea) - parseFloat(b.floorArea)
      );
    case "3":
      return properties.sort(
        (a, b) => parseFloat(b.floorArea) - parseFloat(a.floorArea)
      );
    default:
      return properties;
  }
}

async function appendProperties(type = "all") {
  var loadingDiv = document.getElementById("loading");
  showSpinner(loadingDiv);
  try {
    if (listings.attached.length === 0 || listings.detached.length === 0) {
      await fetchListings();
    }
    let properties = [];
    if (type === "REA") {
      properties = listings.attached;
    } else if (type === "RED") {
      properties = listings.detached;
    } else {
      properties = listings.detached.concat(listings.attached);
    }

    if (currentSortOption !== "")
      properties = sortProperties(properties, currentSortOption);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedListings = properties.slice(startIndex, endIndex);

    const listingsContainer = document.getElementById("results-container");
    listingsContainer.innerHTML = "";

    hideSpinner(loadingDiv);
    paginatedListings.forEach((property) => {
      const li = createListingItem(property);
      listingsContainer.appendChild(li);
    });

    renderPaginationControls(properties.length, type);
  } catch (error) {
    console.error("Failed to append properties:", error);
  }
}

function renderPaginationControls(totalItems, type) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Update current page info
  document.getElementById(
    "res-range"
  ).textContent = `${currentPage} of ${totalPages}`;

  // Handle Prev and Next button states
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");

  prevButton.classList.toggle("disabled", currentPage === 1);
  nextButton.classList.toggle("disabled", currentPage === totalPages);

  // Remove previous event listeners
  prevButton.replaceWith(prevButton.cloneNode(true));
  nextButton.replaceWith(nextButton.cloneNode(true));

  // Reattach new event listeners
  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      window.scrollTo(0, 0);
      appendProperties(type);
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      window.scrollTo(0, 0);
      appendProperties(type);
    }
  });
}

function openModal(overlay) {
  if (overlay) {
    overlay.style.display = "block";
  } else {
    console.error("Overlay element not found");
  }
}

function closeModal(target) {
  const overlay = target.closest(".mrp-listing-result-overlay");
  if (overlay) {
    overlay.style.display = "none";
  } else {
    console.error("Overlay element not found");
  }
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("close")) {
    closeModal(event.target);
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("full-text-tab")) {
    // const targetId = event.target.getAttribute("data-target");
    const gp = event.target.parentElement.parentElement;
    const overlay =
      gp.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling;
    openModal(overlay);
  }
});

function showSpinner(loadingDiv) {
  loadingDiv.style.visibility = "visible";
}

function hideSpinner(loadingDiv) {
  loadingDiv.style.visibility = "hidden";
}

async function appendHomeProperties() {
  await fetchListings();
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  listings.attached.slice(0, 20).forEach((listing) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide", "s-item", "with-ribbon", "s-ribbon");
    const serializedProperty = encodeURIComponent(JSON.stringify(listing));
    slide.innerHTML = `
            <a href="./listing.html?property=${serializedProperty}" class="s-link" role="button" aria-label="${listing.address}"></a>
            <div class="s-image s-image-zoom " data-listing="true" data-id="${listings.attached.indexOf(
              listing
            )}">
                <img src="${listing.images[0]}" alt="${
      listing.address
    }" class="abs-fill">
                <div class="more-info">More Info</div>
            </div>
            <div class="s-info">
                <div class="s-address">${listing.address}</div>
                <div class="s-price">${listing.price.toLocaleString()}</div>
                <div class="s-details">
                    <div class="s-beds">${listing.bedrooms}</div>
                    <div class="s-baths">${listing.bathrooms}</div>
                    <div class="s-sqft">${listing.floorArea}</div>
                </div>
            </div>
        `;

    swiperWrapper.appendChild(slide);
  });
}

function getlistings() {
  const attached = listings.attached;
  const detached = listings.detached;
  return attached.concat(detached);
}

async function login(){
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: 'GET',
      credentials: 'include'
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.message);
      localStorage.setItem('token', data.token);
    } else {
      console.error('Login failed:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
