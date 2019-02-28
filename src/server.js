require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const Addresses = require("./addresses");
const Locations = require("./locations");

const app = express();
const PORT  = process.env.PORT || 3000;
const googleMapsApiKey = process.env.GOOGLE_API_KEY;

app.use("/static", express.static("static")); // Exposes static folder to serve images and styles
app.use(morgan("combined")); // Logs requests
app.set("view engine", "ejs"); // Set default view engine

const start = async function() {
  console.info("Loading addresses.");
  const addresses = await Addresses.getAddresses();
  console.info(
    "Converting addresses into locations. Please notice this may take a while if there are many addresses..."
  );
  const locations = await Locations.getLocations(addresses);
  console.info("Starting application");
  app.get("/", function(req, res) {
    res.render("index", {
      locations,
      apiKey: googleMapsApiKey,
    });
  });

  app.listen(PORT, function() {
    console.log("Maps app listening on port " + PORT);
  });
};

module.exports = {
  start
};
