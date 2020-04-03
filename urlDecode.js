const urlDecode = function(text) {
  let sets = text.split("&")
  let obj = {}
  for (let set of sets) {
    let [k, v] = set.split("=")
    obj[k] = v.split("%20").join(" ")
  }
  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);