// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

let num1 = prompt('Please enter a value for num1');
let num2 = prompt('Please enter a value for num2');

if (num1 >= 5 && num2 >= 5) {
    console.log(true);
} else {
    // if num1 and num2 is less than 5 or either one of the value is less than 5 it will print false
    console.log(false);
}