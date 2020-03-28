const fs = require("fs");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.GOOGLE_API_KEY,
  sensor: true
};

const geocoder = NodeGeocoder(options);

const getLocations = async function(addresses) {
  try {
    const locations = await geocoder
      .batchGeocode(addresses)
      .filter(({ error }) => !error)
      .map(({ error, value: [result, ...results] }) => ({
        lat: result.latitude,
        lng: result.longitude
      }));
    return locations;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getLocations
};
