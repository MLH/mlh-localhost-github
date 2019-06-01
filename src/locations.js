const fs = require("fs");
const NodeGeocoder = require("node-geocoder");

var options = {
  provider: "here",
  httpAdapter: "https",
  appId: process.env.HERE_APP_ID,
  appCode: process.env.HERE_APP_CODE
};

var geocoder = NodeGeocoder(options);

async function getLocations(addresses) {
  const locations = await geocoder
    .batchGeocode(addresses)
    .filter(({ error }) => !error)
    .map(({ error, value: [result, ...results] }) => ({
      lat: result.latitude,
      lng: result.longitude
    }));
  return locations;
}

module.exports = {
  getLocations
};
