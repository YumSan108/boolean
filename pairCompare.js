// Using if/else statements and strict equality operators, 
// JavaScript code in a script tag that compares two sets of two values. 
// Print true if at least one of the pairs is truthy.

let param1A = prompt('Please enter a text for param1A');
let param1B = prompt('Please enter a text for param1B');
let param2A = prompt('Please enter a text for param2A');
let param2B = prompt('Please enter a text for param2B');

if (param1A == param1B && param2A == param2B) {
    conssole.log(true);
} else {
    console.log(false);
}