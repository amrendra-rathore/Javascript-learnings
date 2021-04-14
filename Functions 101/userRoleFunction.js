/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with full access.
subadmin - with access to create/delete content
testprep - with access to create/delete sub-content
user - Consume all content.
other - trial user

Input : getUserRole(name,role)
*/

function getUserRole(name, role) {

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;  // Not necessary
        case "subadmin":
            return `${name} is sub-admin with access to create/delete content`;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete sub-content`;
            break;                    
        case "user":
            return `${name} is a user to consume content`;
            break;

        default:
            return `${name} is a trial user`;
            break;
    }
}

//Writing functions and passing multiple parameters - Using conditionals.

console.log(getUserRole("amrendra", "testprep"));

var getRole = getUserRole("sam");

console.log(getRole);


