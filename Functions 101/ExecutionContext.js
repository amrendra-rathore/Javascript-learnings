/* Execution Context 
   - Variable Object
   - Scope Chain 
   - This 

    Rule 1 : Function Declaration are scanned and made available.
    Rule 2 : Variable declarations are scanned and made undefined.
    
   */

tipper("15");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


var bigTipper = function (a) {  // if we are defining a variable and assign it equal to a function - Hoisting will not see in a global context as variables are declared as undefined.
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");

console.log(name);
var name="Armin";

function sayName() {
    var name = "Mr. A";
    console.log(name);
}
sayName();

console.log(name);