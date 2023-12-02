const fs = require("fs");

const idTotaller = () => {
  const data = fs.readFileSync("./2data.txt", "utf-8").toString();

  const splitStrings = data.split("\n");

  let totalOfValidIds = 0;

  let totalPowers = 0;

  for (let i = 0; i < splitStrings.length; i++) {
    let highestBlue = 0;
    let highestGreen = 0;
    let highestRed = 0;

    const stringsWithoutId = splitStrings[i].split(":")[1];

    const stringsWithoutSemicolons = stringsWithoutId.split(";");

    const stringsWithoutColons = stringsWithoutSemicolons.map((string) =>
      string.split(",")
    );

    const flattenedArray = stringsWithoutColons.flat();

    for (let j = 0; j < flattenedArray.length; j++) {
      const [_, num, color] = flattenedArray[j].split(" ");

      const parsedNum = parseInt(num);

      if (color === "blue" && parsedNum > highestBlue) {
        highestBlue = parsedNum;
      }
      if (color === "green" && parsedNum > highestGreen) {
        highestGreen = parsedNum;
      }
      if (color === "red" && parsedNum > highestRed) {
        highestRed = parsedNum;
      }
    }

    if (highestBlue <= 14 && highestGreen <= 13 && highestRed <= 12) {
      totalOfValidIds += i + 1;
    }

    totalPowers += highestBlue * highestGreen * highestRed;
  }

  return console.log({ totalOfValidIds, totalPowers });
};

idTotaller();
