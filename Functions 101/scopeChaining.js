//Scope chaining explaination through example

var name = "Amrendra";

console.log("Line number 3", name);

function sayName() {
  //  var name = "Mr Armin"
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo() {
      //  var name = "Mr A"
        console.log("Line number 14", name);
    }
}

sayName();

// a function's scope can be one level up or can get the values from the outer scope/block but can not get from the inside block/scope.