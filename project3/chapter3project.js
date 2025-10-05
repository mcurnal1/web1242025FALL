var name = "Maryam Curnal";
var desiredAnnualSalary = 1000000;
var veteranStatus = false;
const friends = ["lela", "luvi", "kena"];
const desiredSalaryOfFriends = [100000, 100300, 100400];
const newFriendObject = {
  firstName: "kelly",
  lastName: "james",
  desiredSalary: 100500,
};

console.log(
  name +
  desiredAnnualSalary +
  veteranStatus +
  friends +
  desiredSalaryOfFriends +
  newFriendObject.firstName +
  newFriendObject.lastName +
  newFriendObject.desiredSalary +
  JSON.stringify(newFriendObject)
