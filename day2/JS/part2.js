const lineReader = require("line-reader");

let horizontal = 0;
let depth = 0;
let aim = 0;

lineReader.eachLine("input.txt", (line, last) => {
  parseLineUpdated(line);
  if (last == true) console.log(horizontal * depth);
});

function parseLineUpdated(text) {
  let arr = text.split(" ");
  arr[1] = parseInt(arr[1]);
  switch (arr[0]) {
    case "forward":
      depth += (aim * arr[1]);
      horizontal += arr[1];
      break;
    case "down":
      aim += arr[1];
      break;
    case "up":
      aim -= arr[1];
      break;
  }
}
