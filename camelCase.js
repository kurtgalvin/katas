let camelCase = function(input) {
  const inputArray = input.split(" ")
  let camel = inputArray.shift()
  for (word of inputArray) {
    camel += word[0].toUpperCase() + word.slice(1)
  }
  return camel
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));