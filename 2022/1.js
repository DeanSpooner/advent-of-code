const fs = require("fs");

const mostInList = () => {
  const input = fs.readFileSync("./1data.txt", "utf-8").toString();

  const splitStrings = input.split("\n");

  const arrayOfNumbers = [];

  let currentElfArray = [];
  for (let i = 0; i < splitStrings.length; i++) {
    if (splitStrings[i] === "") {
      arrayOfNumbers.push(currentElfArray);
      currentElfArray = [];
    } else {
      currentElfArray.push(parseInt(splitStrings[i]));
    }
  }

  let highestTotals = [3, 2, 1];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const currentTotal = arrayOfNumbers[i].reduce((a, b) => a + b);

    if (
      currentTotal > highestTotals[0] ||
      currentTotal > highestTotals[1] ||
      currentTotal > highestTotals[2]
    ) {
      highestTotals.push(currentTotal);

      highestTotals.sort((a, b) => b - a);

      highestTotals.pop();
    }
  }

  return console.log(highestTotals.reduce((a, b) => a + b));
};

mostInList();
