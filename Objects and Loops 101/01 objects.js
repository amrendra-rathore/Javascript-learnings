var user = {
    firstName : "Amrendra", 
    lastName : "Rathore",
    role : "Admin",
    loginCount : 3,
    facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);  // Prints the data ina a tabular form.