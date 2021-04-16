//Define a prototype

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () {
  console.log(`Your firstname is : ${this.firstName}`);
};


// new keyword is responsible for invoking the constructor and takes care of this keyword - as this keyword doesnt respond normally on a regular function call.
var amrendra = new User("amrendra", 2);
amrendra.getCourseCount();

if (amrendra.hasOwnProperty("firstName")) {
  amrendra.getFirstname();
}

// console.log(amrendra);

var sam = new User("sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);
