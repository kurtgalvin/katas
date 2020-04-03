const multiplicationTable = function(maxValue) {
  let table = ""
  for (let y = 1; y <= maxValue; y++) {
    let row = ""
    for (let x = 1; x <= maxValue; x++) {
      row += `${y*x} `
    }
    table += row + "\n"
  }
  return table
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));