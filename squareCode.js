const squareCode = function(message) {
  let full = message.split(" ").join("")
  const n = Math.ceil(Math.sqrt(full.length))
  let result = Array(n).fill("") // Array of n empty strings
  for (let i in full) {
    result[i%n] += full[i]
  }
  return result.join(' ')
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));