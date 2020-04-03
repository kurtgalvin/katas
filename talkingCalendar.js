let talkingCalendar = function(date) {
  date = new Date(date)
  let niceDate = date.toLocaleString('default', {month: 'long'})
  
  switch (date.getDate()) {
    case 1:
      niceDate += ` ${date.getDate()}st, ${date.getFullYear()}`
      break
    case 2:
      niceDate += ` ${date.getDate()}nd, ${date.getFullYear()}`
      break
    case 3:
      niceDate += ` ${date.getDate()}rd, ${date.getFullYear()}`
      break
    default:
      niceDate += ` ${date.getDate()}th, ${date.getFullYear()}`
      break
  }

  return niceDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));