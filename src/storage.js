const fs = require("fs");

const LOCATIONS_PATH = "locations.txt";
const COORDINATES_PATH = "coordinates.json";

const getLocations = () => {
   return fs.promises
     .readFile(LOCATIONS_PATH)
     .then((fileContent) => String(fileContent).split("\n"));
}

const getNewLocations = () => {
  return Promise.all([
    fs.promises.readFile(LOCATIONS_PATH),
    fs.promises.readFile(COORDINATES_PATH)
  ]).then(([locations, coordinates]) => {
    const locationLength = String(locations).replace(/\n+$/,"").split("\n").length;
    const coordinateLength = String(coordinates).replace(/\n+$/,"").split("\n").length;
    console.log({locationLength, coordinateLength});
    return String(locations).split("\n").slice(coordinateLength);
  });
}

const getCoordinates = () => {
   return fs.promises
     .readFile(COORDINATES_PATH)
     .then((fileContent) => JSON.parse(fileContent));
}

const saveNewCoordinates = (newCoordinates) => {
  return getCoordinates().then((currentCoordinates) => {
    console.log({newCoordinates});
    const coordinates = currentCoordinates.concat(newCoordinates);
    coordinatesContent = JSON.stringify(coordinates).replace(/\}/g, "}\n");
    return fs.promises.writeFile(COORDINATES_PATH, coordinatesContent);
  })
};

const getExampleLocations = function() {
  return [];
};

module.exports = {
  getLocations,
  getNewLocations,
  getCoordinates,
  saveNewCoordinates,
  getExampleLocations
};
