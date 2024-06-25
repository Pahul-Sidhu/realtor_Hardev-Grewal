const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");
const { scrapeLinks } = require("./update");
const { readListings } = require("./db");
const { login } = require("./db");
const getAuth  = require("./db");
const cors = require("cors");
var cron = require("node-cron");
app.use(cookieParser());
app.use(express.json());

const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization.split(" ")[1];
  if (!idToken) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const decodedToken = await getAuth.adminAuth.verifyIdToken(idToken);
    if (decodedToken) {
      req.user = decodedToken;
      next();
    } else {
      return res.status(403).json({ error: "Unauthorized" });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(403).json({ error: "Unauthorized" });
  }
};

cron.schedule("0 0 */24 * * *", function () {
  scrapeLinks();
});

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Please login to continue");
});

app.get("/login", async (req, res) => {
  const token = await login();

  res.status(200).json({ message: "User logged in successfully" , token: token});
});

app.get("/getlistings", verifyToken, async (req, res) => {
  console.log("Getting listings...");
  const attached = await readListings("attached");
  const detached = await readListings("detached");
  res.send({ attached: attached, detached: detached });
});

app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});



