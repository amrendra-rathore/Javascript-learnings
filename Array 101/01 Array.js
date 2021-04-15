// var name;
// var name2;
// var name3;

//Replace multiple variables of same data type/different.

var countries = ["India", "USA", "Japan", "UK", "South Africa"];

var states = new Array("Maharashtra", "Uttar Pradesh", "Raleigh", "Karnataka");

// console.log(states[1]);

// console.log(states.length);
// states[0] = "Rajasthan";
// console.log(states);

var user = ["Amrendra", "wolfraptordev@gmail.com", 3, 34, true];
console.log(user);

console.log(user.indexOf(true));

user.pop();
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
user.shift();
console.log(user);

console.log(user.indexOf("newyy"));


// use pop to remove an element from the end of an array.
// use shift to remove an element from the beginning of an array.

// use indexOf to serach for an element in the array and find its position in the aray.
// if the output comes as -1 (element is not available in the array)

console.log(Array.from("Amrendra"));

//Create an array from a string using "Array.from"