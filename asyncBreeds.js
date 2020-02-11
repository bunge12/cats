// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// const printData = (data) => {
//   console.log(data);
// }

// we try to get the return value
// const bombay = breedDetailsFromFile('Bombay', printData);



module.exports = breedDetailsFromFile;