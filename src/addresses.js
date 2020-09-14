const fs = require("fs");

const DEFAULT_FILE_PATH = "../locations.txt";

const getAddresses = async function(filePath = DEFAULT_FILE_PATH) {
  const fileContent = await fs.promises.readFile("locations.txt");
  return String(fileContent).split("\n");
};

const getExampleAddresses = function() {
  return [];
};

module.exports = {
  getAddresses,
  getExampleAddresses
};
