class Sentance {
  constructor(sentance) {
    this.sentance = sentance
    this.list = sentance.split(" ")
    this.vowels = ["a", "e", "i", "o", "u"]
  }

  _capFirst(word) {
    return word[0].toUpperCase() + word.slice(1)
  }

  _pascal(words) {
    let result = ""
    for (let word of words) {
      result += this._capFirst(word)
    }
    return result
  }

  _vowel(opposite = false) {
    let result = ""
    for (let letter of this.sentance) {
      if (this.vowels.includes(letter)) {
        result += opposite ? letter : letter.toUpperCase()
      } else {
        result += opposite ? letter.toUpperCase() : letter
      }
    }
    return result
  }

  get camel() {
    return this.list[0] + this._pascal(this.list.slice(1))
  }

  get pascal() {
    return this._pascal(this.list)
  }

  get snake() {
    return this.list.join("_")
  }

  get kebab() {
    return this.list.join("-")
  }

  get title() {
    let result = ""
    for (let word of this.list) {
      result += `${this._capFirst(word)} `
    }
    return result.slice(0, result.length-1)
  }

  get vowel() {
    return this._vowel()
  }

  get consonant() {
    return this._vowel(true)
  }
}


const makeCase = function(input, case_) {
  const s = new Sentance(input)
  if (Array.isArray(case_) && case_[0] === "upper") {
    return s[case_[1]].toUpperCase()
  }
  return s[case_]
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));