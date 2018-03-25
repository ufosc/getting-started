// Run with: tsc --target ES5 --outFile file.js file.ts -w 

// Boolean 
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let fullName: string = "Bob Bobbington" + decimal + " Is my favorite number";
let sentence: string = `Hello, my name is ${ fullName }`;

// Array
let aList: number[] = [1, 2, 3];
let bList: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10]; 
console.log(x[1]); // Print "10"

// Type Assertion, when you know better
let aStrLength: number = (fullName as string).length;
let bStrLength: number = (<string>fullName).length;