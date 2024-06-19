const express = require("express");
const app = express();
const port = 8000;
const { scrapeLinks } = require("./update");
const { readListings } = require("./db");
const cors = require('cors');
var cron = require('node-cron');

cron.schedule('0 0 */1 * * *', function(){
  scrapeLinks();
});

app.use(cors());

app.get('/getlistings', async (req, res) => { 
  console.log("Getting listings...");
  const attached = await readListings("attached");
  const detached = await readListings("detached");
  res.send({ attached : attached, detached : detached });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  scrapeLinks();
});