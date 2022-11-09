const repeatString = function(string, int) {
let repString = "";
while (int > 0) {
    repString += string;
    int--;
} if (int < 0) {
    repString = "ERROR";
}
return repString;
}

repeatString("hey", 3);
repeatString("hey", 10);
repeatString("hey", 1);
repeatString("hey", 0);
repeatString("hey", -1);
const number = Math.floor(Math.random() * 1000);
repeatString("hey", number);
repeatString("", 10);



// Do not edit below this line
module.exports = repeatString;
