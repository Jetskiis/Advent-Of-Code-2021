const lineReader = require("line-reader");

let horizontal = 0;
let depth = 0;

lineReader.eachLine("input.txt", (line,last) => {
  parseLine(line);
  if (last == true)
    console.log(horizontal * depth);
});

function parseLine(text) {
  let arr = text.split(" ");
  arr[1] = parseInt(arr[1]);
  switch (arr[0]) {
    case "forward":
      horizontal += arr[1];
      break;
    case "down":
      depth += arr[1];
      break;
    case "up":
      depth -= arr[1];
      break;
  }
}

