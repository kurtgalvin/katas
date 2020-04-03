let prompt = require("prompt-sync")();

class Game {
  constructor() {
    this.guesses = []
    this.theNumber = 42
  }

  guess(answer) {
    let n = Number(answer)
    if (isNaN(n)) {
      console.log("Not a number! Try again!")
    } else if (this.guesses.includes(n)) {
      console.log("Already Guessed!")
    } else if (n === this.theNumber) {
      this.guesses.push(n)
      console.log(`You got it! You took ${this.guesses.length} attempts!`)
      return true
    } else {
      if (n > this.theNumber) {
        this.guesses.push(n)
        console.log("Too High!")
      } else {
        this.guesses.push(n)
        console.log("Too Low!")
      }
    }
    return false
  }
}

function play() {
  const game = new Game()
  while (true) {
    let answer = prompt("Guess a number: ");
    if (game.guess(answer)) {
      break
    }
  }
}

play()