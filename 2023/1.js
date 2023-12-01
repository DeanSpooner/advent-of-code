const fs = require("fs");

const mostInList = () => {
  const data = fs.readFileSync("./1data.txt", "utf-8").toString();

  const splitStrings = data.split("\n");

  let cumulativeTotal = 0;

  // Loop through every line of the data.
  for (let i = 0; i < splitStrings.length; i++) {
    let firstDigit = "";
    let lastDigit = "";

    let firstDigitAssigned = false;

    let currentLine = splitStrings[i]
      .replaceAll("one", "o1e")
      .replaceAll("two", "t2o")
      .replaceAll("three", "t3e")
      .replaceAll("four", "f4r")
      .replaceAll("five", "f5e")
      .replaceAll("six", "s6x")
      .replaceAll("seven", "s7n")
      .replaceAll("eight", "e8t")
      .replaceAll("nine", "n9e");

    // Loop through every character of the current line.
    for (let j = 0; j < currentLine.length; j++) {
      if (currentLine.charCodeAt(j) >= 48 && currentLine.charCodeAt(j) <= 57) {
        lastDigit = currentLine[j];
        if (!firstDigitAssigned) {
          firstDigit = currentLine[j];
          firstDigitAssigned = true;
        }
      }
    }
    cumulativeTotal += parseInt(firstDigit + lastDigit);
  }

  return console.log(cumulativeTotal);
};

mostInList();
