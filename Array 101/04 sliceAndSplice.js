const myNumber = [23, 45, 67, 89, 55, 66, 87]

const result = myNumber.filter((num) => num != 55);

console.log(result);

var users = ["Ted", "Elon", "Barney", "Bran", "Arya", "Sherlock"];

console.log(users.slice(1,5)); // Slicing after defining the starting and ending point.

// Splice 

users.splice(1, 4, "HI", "BYE" );  // Start point and the number of elements to be counted and spliced is mentioned in the parenthesis.
console.log(users);