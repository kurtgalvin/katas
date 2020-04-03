const conditionalSum = function(values, condition) {
  let n = 0
  for (v of values) {
    if (condition === "even" && v % 2 === 0) {
      n += v
    } else if (condition === "odd" && v % 2 === 1) {
      n += v
    }
  }
  return n
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));