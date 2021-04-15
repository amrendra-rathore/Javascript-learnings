var user = {
    firstName : "Amrendra", 
    lastName : "Rathore",
    role : "Admin",
    loginCount : 3,
    facebookSignedIn: true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },  // Define a method
    getCourseCount: function (courseCount) {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info: function () {
        console.table(user);
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.info());

