// Functions

// Plain JavaScript

// Named function
function add0(x, y) {
	return x + y;
}

// Anonymous function
let myAdd0 = function(x, y) { return x + y; };

// TypeScript versions

// Typing names
function add1(x: number, y: number): number {
	return x + y;
}

// Typing anonymous
let myAdd1: (baseValue: number, increment: number) => number =
	function(x: number, y: number): number { return x + y; };
		
// Inferred types 

// myAdd has the full function type
let myAdd2 = function(x: number, y: number): number { return  x + y; };

// The parameters 'x' and 'y' have the type number
let myAdd3: (baseValue: number, increment: number) => number =
		function(x, y) { return x + y; };

// Default parameter
function buildName0(firstName = "Will", lastName: string) {
	return firstName + " " + lastName;
}

let result1 = buildName0("Bob", "Adams");         // okay and returns "Bob Adams"
let result2 = buildName0(undefined, "Adams");     // okay and returns "Will Adams"

// Optional parameter
function buildName1(firstName: string, lastName?: string) {
	if (lastName)
		return firstName + " " + lastName;
	else
		return firstName;
}

let result3 = buildName1("Bob");                  // works correctly now
let result4 = buildName1("Bob", "Adams");         // ah, just right

// Rest parameter (optional list)
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "Mack");

// Overloading
let suits = ["hearts", "spades", "clubs", "diamonds"];

// Most to least specific (the any call can not be used directly)
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
	// Check to see if we're working with an object/array
	// if so, they gave us the deck and we'll pick the card
	if (typeof x == "object") {
		let pickedCard = Math.floor(Math.random() * x.length);
		return pickedCard;
	}
	// Otherwise just let them pick the card
	else if (typeof x == "number") {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);