// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

let num1 = prompt('Please enter a value for num1');
let num2 = prompt('Please enter a value for num2');

let sum = num1 + num2;

if (sum < -1000) {
    console.log('${sum} is less than -1000');
} else if (sum < 0) {
    console.log('${sum} is a negative number');
} else if (sum === 0) {
    console.log('${sum} is equal to 0');
} else if (sum <= 100 && sum > 0) {
    console.log('${sum} is larger than 0');
} else if (sum > 100) {
    console.log('${sum} is greater than 100')
} else {
    console.log('No value was entered. Good bye')
}