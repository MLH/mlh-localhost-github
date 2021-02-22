require("dotenv").config();
const path = require("path");

const Storage = require("./src/storage");
const Locations = require("./src/locations");

const googleMapsApiKey = process.env.GOOGLE_API_KEY;


const geocode = function() {
  return Storage.getNewLocations()
    .then(Locations.getCoordinates)
    .then(Storage.saveNewCoordinates);
};

geocode();