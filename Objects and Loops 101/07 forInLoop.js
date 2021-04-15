// For-in loop implementation in javascript

const symbols = {
    yt: "youtube",
    ig: "Instagram",
    fb: "Facebook",
    wa: "WhatsApp",
    rd: "Reddit",
    li: "LinkedIn",
};

for (const n in symbols) {
        console.log(`Key is ${n} and Value is: ${symbols[n]}`);
}