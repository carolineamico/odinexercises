const sumAll = function(num1, num2) {
let sum = 0; 
if ((!(typeof num1 === "number")) || (!(typeof num2 === "number"))) {
    return "ERROR";
}
if ((num1 < 0) || (num2 < 0)) {
    return "ERROR";
}
if (num1 <= num2) {
    min = num1;
    max = num2;
}
else if (num2 < num1) {
    min = num2;
    max = num1;
}

for (i = min; i < (max + 1); i++) {
    sum+= i;
}
return sum;
}

module.exports = sumAll
