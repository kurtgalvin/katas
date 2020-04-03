let isVowel = function(letter) {
  switch (letter) {
    case "a":
      return true
    case "e":
      return true
    case "i":
      return true
    case "o":
      return true
    case "u":
      return true
    default:
      return false
  }

}

let numberOfVowels = function(data) {
  let n = 0
  for (letter of data) {
    if (isVowel(letter)) {
      n++
    }
  }
  return n
};

console.log(numberOfVowels("orange"), 3);
console.log(numberOfVowels("lighthouse labs"), 5);
console.log(numberOfVowels("aeiou"), 5);