//Function Declaration

function sayHello(name) {
    console.log("Hello Amrendra");
    console.log(`Hello there, ${name}, How are you?`);
}

// Passing a parameter
sayHello("amrendra");

// Returning the value from a function and storing it to a variable
function namastey() {
    return "Hello in India";
}

var greetings = namastey();

//Printing the value returned from the variable
console.log(greetings);
//calling the function directly in a print statement
console.log(namastey());
