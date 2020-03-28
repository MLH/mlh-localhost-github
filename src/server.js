require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const Addresses = require("./addresses");
const Locations = require("./locations");

const app = express();
const PORT = process.env.PORT || 3000;
const googleMapsApiKey = process.env.GOOGLE_API_KEY;

app.use("/static", express.static("static")); // Exposes static folder to serve images and styles
app.use(morgan("combined")); // Logs requests
app.set("view engine", "ejs"); // Set default view engine

const start = async function() {
  // Let's load the addresses for the map.
  const addresses = await Addresses.getAddresses();

  // Let's convert these addresses into locations.
  const locations = await Locations.getLocations(addresses);

  // We need to define the basic route for our application.
  app.get("/", function(req, res) {
    res.render("index", { locations, apiKey: googleMapsApiKey });
  });

  // We start the application by listening to the defined PORT.
  app.listen(PORT, function() {
    console.log("Maps app listening on port " + PORT);
  });
};

module.exports = {
  start
};
