const urlEncode = function(text) {
  text = text.trim()
  // return text.split(" ").join("%20")
  let encoded = ""
  for (letter of text) {
    if (letter !== " ") {
      encoded += letter
    } else {
      encoded += "%20"
    }
  }
  return encoded
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));