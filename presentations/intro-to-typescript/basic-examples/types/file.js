// Run with: tsc --target ES5 --outFile file.js file.ts -w 
// Boolean 
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var fullName = "Bob Bobbington" + decimal + " Is my favorite number";
var sentence = "Hello, my name is " + fullName;
// Array
var aList = [1, 2, 3];
var bList = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10];
console.log(x[1]); // Print "10"
// Type Assertion, when you know better
var aStrLength = fullName.length;
var bStrLength = fullName.length;
