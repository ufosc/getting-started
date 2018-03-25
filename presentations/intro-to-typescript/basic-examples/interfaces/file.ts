// Interfaces

// Define it
interface LabelledValue {
	label: string;
}

// Type check it
function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}

// This object fulfills the contract 
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// Optional properties 
interface SquareConfig {
	color?: string;
	width?: number;
}

// We would get an error if function miss-typed color for instance
function createSquare(config: SquareConfig): {color: string; area: number} {
	let newSquare = {color: "white", area: 100};
	if (config.color) {
			newSquare.color = config.color;
	}
	if (config.width) {
			newSquare.area = config.width * config.width;
	}
	return newSquare;
}

// Make a black square, but otherwise the default values
let mySquare = createSquare({color: "black"});

// Readonly property
interface Point {
	readonly x: number;
	readonly y: number;
}

let p1: Point = { x: 10, y: 20};
// p1.x = 5; // Error

// Interface contract can let other properties exist
interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any; // An index-able type (dictionary/array)
}

// Colour is not a specified property, but is now allowed
let myOtherSquare = createSquare({ colour: "red", width: 100 });

// Functions can have interfaces
interface SearchFunc {
	(source: string, subString: string): boolean;
}

// TypeScript infers the types and parameter order
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// Interfaces can be applied to classes
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

// Interfaces can only apply public non-static properties to classes
class Clock implements ClockInterface {
	currentTime: Date;
 	setTime(d: Date) {
			this.currentTime = d;
	}
	constructor(h: number, m: number) { }
}

// Interfaces can be applied to interfaces
interface Shape {
	color: string;
}

interface PenStroke {
	penWidth: number;
}

interface Square extends Shape, PenStroke {
	sideLength: number;
}
