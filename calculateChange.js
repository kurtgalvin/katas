const denominations = [
  {
    name: "twentyDollar",
    value: 2000
  },
  {
    name: "tenDollar",
    value: 1000
  },
  {
    name: "fiveDollar",
    value: 500
  },
  {
    name: "twoDollar",
    value: 200
  },
  {
    name: "oneDollar",
    value: 100
  },
  {
    name: "quarter",
    value: 25
  },
  {
    name: "dime",
    value: 10
  },
  {
    name: "nickel",
    value: 5
  },
  {
    name: "penny",
    value: 1
  },
]

let calculateChange = function(total, cash) {
  let remaining = cash - total
  let change = {}
  while (remaining > 0) {
    for (i of denominations) {
      if (remaining >= i.value) {
        if (change[i.name] === undefined) {
          change[i.name] = 1
        } else {
          change[i.name] ++
        }
        remaining -= i.value
        break
      }
    }
  }
  return change
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));