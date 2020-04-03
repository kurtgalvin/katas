class Taxi {
  constructor() {
    this.direction = undefined
    this.result = {
      east: 0,
      north: 0
    }
  }

  _changeDirection(d) {
    switch(this.direction) {
      case "up":
        if (d === "left") {
          return "left"
        } else if (d === "right") {
          return "right"
        }

      case "right":
        if (d === "left") {
          return "up"
        } else if (d === "right") {
          return "down"
        }

      case "down":
        if (d === "left") {
          return "right"
        } else if (d === "right") {
          return "left"
        }

      case "left":
        if (d === "left") {
          return "down"
        } else if (d === "right") {
          return "up"
        }
    }
  }

  _move(d, n) {
    switch(d) {
      case "up":
        this.result.north += n
        break
      case "right":
        this.result.east += n
        break
      case "down":
        this.result.north -= n
        break
      case "left":
        this.result.east -= n
        break
    }
  }

  left(n) {
    if (this.direction === undefined) {
      this.direction = "up"
      this.result.north += n
    } else {
      this.direction = this._changeDirection("left")
      this._move(this.direction, n)
    }
  }

  right(n) {
    if (this.direction === undefined) {
      this.direction = "right"
      this.result.east += n
    } else {
      this.direction = this._changeDirection("right")
      this._move(this.direction, n)
    }
  }
}

const blocksAway = function(directions) {
  const taxi = new Taxi()

  for (let i = 0; i < directions.length; i += 2) {
    let d = directions[i]
    let n = directions[i+1]
    taxi[d](n)
  }
  return taxi.result
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
