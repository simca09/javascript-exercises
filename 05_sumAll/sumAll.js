const sumAll = function(a,b) {
    let sum = 0;
    let max = 0;
    let min = 0;
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else if (a < 0 || b < 0 ) {
        return "ERROR";
    }
    else if (a < b) {
        min = a;
        max = b;
    } else if (b < a) {
        min = b;
        max = a;
    } 
for (i = min; i <= max; i++){
    sum += i;
}
return sum;
    }

sumAll(1,4);
sumAll(1,4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90,1]);

// Do not edit below this line
module.exports = sumAll;
