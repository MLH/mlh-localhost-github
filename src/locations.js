const fs = require("fs");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GOOGLE_API_KEY,
  sensor: true
};

const geocoder = NodeGeocoder(options);

const getCoordinates = function(locations) {
    return geocoder
      .batchGeocode(locations)
      .then(coordinates => 
        coordinates
        .filter(({ error }) => !error)
        .map(({ error, value: [result, ...results] }) => {
          if(!result) {
            return {lat: null, lng: null};
          }
          return {
            lat: result.latitude,
            lng: result.longitude
          };
        })
      ).error(console.log);
};

module.exports = {
  getCoordinates
};
