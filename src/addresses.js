const fs = require("fs");

const DEFAULT_FILE_PATH = "../locations.txt";

async function getAddresses(filePath = DEFAULT_FILE_PATH) {
  const fileContent = await fs.promises.readFile('locations.txt');
  return String(fileContent).split("\n");
}

function getExampleAddresses() {
  return [];
}

module.exports = {
  getAddresses,
  getExampleAddresses
};
