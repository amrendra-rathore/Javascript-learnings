// While and do-while loop implementation in Javascript

const myStates = ["Rajasthan", "Uttar Pradesh", 1956, "Karnataka", "Maharashra", "Uttarakhand"];

let i = 0;        // i is declared outside the loop.

while (i < myStates.length) {
    console.log(myStates[i]);
    i++;
}

do {
    console.log([i]);
    i++;
} while (i < 10);