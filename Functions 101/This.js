//This keyword implementation

console.log(this);

var user = {
    firstName: "Amrendra",
    courseCount: 5,
    getCourseCount: function(){
        console.log("Line 7", this);
    },
};

user.getCourseCount();

// - For all regular function calls, this points to window object.

function sayHello() {
    console.log("Hello");
    console.log("Line 15", this);
}

sayHello();