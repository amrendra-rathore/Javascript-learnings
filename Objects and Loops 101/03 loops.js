// Loops

// for (let index = 0; index < 10; index++) {
//     //const element = array[index];
//     console.log(index);
// }


const myStates = ["Rajasthan", "Assam", 1956, "Tamil Nadu", "Maharashra"];

for (let index = 0; index < myStates.length; index++) {
    if(typeof myStates[index] === "string") continue;  // continue can be replaced with break of the loop needs to be stopped after a condition is matched.
    console.log(myStates[index]);
}


// Implementation of for loop with continue and break statements being used.