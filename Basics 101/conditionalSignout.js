// Show signout button if user already logged in.
//Else show a button to login/signup



var authenticated = true;

if(authenticated) {
    console.log("Show Signout button");

} else{
    console.log("show login button");
}


// Ternary operator use case

authenticated ? console.log("Signout button") : console.log("LOGIN");