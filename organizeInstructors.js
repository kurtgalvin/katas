const organizeInstructors = function(instructors) {
  let result = {}

  for (i of instructors) {
    if (result[i.course] === undefined) {
      result[i.course] = [i.name]
    } else {
      result[i.course].push(i.name)
    }
  }
  return result
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));