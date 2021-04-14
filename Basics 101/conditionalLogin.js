//Allow user to login using email
//Allow user to login using google
//Allow user to login using facebook

// Binary Logical Operators.

var email = true;
var google = false;
var facebook = false;


if (email || facebook || google){
    console.log("login successful");
} else {
    console.log("login failed!");
}