var board = [];
var num_empty_slots = 0;

const fs = require("fs");

function main() {
  board = readBoard();
}

async function readBoard() {
  data = fs.readFileSync(
    "/Users/ryanmadsen/code/python/cse131/lab04/easy.json"
  );

  data = JSON.parse(data);
  board = data.board;
  console.log(board);
}

readBoard();
