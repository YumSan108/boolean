// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
//     "The boolean value false is falsy";
//     "The null value is falsy";
//     "undefined is falsy";
//     "The number 0 is falsy (the only falsy number)";
//     "The empty string is falsy (the only falsy string)";

// asking the person to enter a text value
let textValue = prompt('Please enter a vlue.');

// if textValue strictly equals to the right side text value it will return true or false depending on the conidtion
if(textValue === 'I am a string') {
    console.log('true');
} else if (textValue === 'false') {
    console.log('false');
} else if (textValue === 'null') {
    console.log('The null value is falsy') 
} else if (textValue === 'undefined') {
    console.log('undefined is falsy')
} else if (textValue === '0') {
    console.log('The number 0 is falsy (the only falsy number')
} else if (textValue === '""') {
    console.log('The empty string is falsy (the only falsy string)')
} else {
    // if no text was entered at all, returns this message
    console.log('No value was entered. Good bye.')
}