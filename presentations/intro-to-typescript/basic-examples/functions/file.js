// Functions
// Plain JavaScript
// Named function
function add0(x, y) {
    return x + y;
}
// Anonymous function
var myAdd0 = function (x, y) { return x + y; };
// TypeScript versions
// Typing names
function add1(x, y) {
    return x + y;
}
// Typing anonymous
var myAdd1 = function (x, y) { return x + y; };
// Inferred types 
// myAdd has the full function type
var myAdd2 = function (x, y) { return x + y; };
// The parameters 'x' and 'y' have the type number
var myAdd3 = function (x, y) { return x + y; };
// Default parameter
function buildName0(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result1 = buildName0("Bob", "Adams"); // okay and returns "Bob Adams"
var result2 = buildName0(undefined, "Adams"); // okay and returns "Will Adams"
// Optional parameter
function buildName1(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result3 = buildName1("Bob"); // works correctly now
var result4 = buildName1("Bob", "Adams"); // ah, just right
// Rest parameter (optional list)
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "Mack");
// Overloading
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

