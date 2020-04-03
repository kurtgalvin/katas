let repeatNumbers = function(data) {
  let result = ""
  for (i of data) {
    result += `${i[0]}`.repeat(i[1]) + ", "
  }
  return result.slice(0, result.length-2)
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));