// Create an app with few roles. (SWITCH STATEMENT)
// admin - gets full access 
// subadmin - gets access ti create/delete content 
// testprep - gets access to create/delete subcontent
// user - gets access to consume content 

// Conditional roles using the Switch cases
var user = "admin";


switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You gets access to create/delete content");
        break;
    case "testprep":
        console.log("You gets access to create/delete subcontent");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    
    default:
        break;
}
