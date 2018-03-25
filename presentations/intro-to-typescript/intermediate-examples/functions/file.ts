// "this" and arrow functions

// "this" normally binds to the context of the function that calls
let deck0 = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function() {
			return function() {
					let pickedCard = Math.floor(Math.random() * 52);
					let pickedSuit = Math.floor(pickedCard / 13);

					return {suit: this.suits[pickedSuit], card: pickedCard % 13};
			}
	}
}

let cardPicker0 = deck0.createCardPicker();
let thePickedCard0 = cardPicker0();

// console.log("card: " + thePickedCard0.card + " of " + thePickedCard0.suit); // Error, "this" in the function is undefined now

// You will often see little hacks like 
class Thing {
	info: number;
	that = this;
	function(that) {
		console.log(that.info); // You wouldn't actually need "that" here
	}
}

// In fact, it's a "hidden" parameter for all calls
function hello(thing) {
  console.log(this + " says hello " + thing);
}

// "call" is a primitive
hello.call("Mary", "world") // Prints "Mary says hello world"

// Arrow functions capture "this" when created, not when invoked
let deck1 = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function() {
			return () => {
					let pickedCard = Math.floor(Math.random() * 52);
					let pickedSuit = Math.floor(pickedCard / 13);

					return {suit: this.suits[pickedSuit], card: pickedCard % 13};
			}
	}
}

let cardPicker1 = deck1.createCardPicker();
let thePickedCard1 = cardPicker1();

console.log("card: " + thePickedCard1.card + " of " + thePickedCard1.suit);

// However, "this" can still be anything, so add explicitly a type
interface Card {
	suit: string;
	card: number;
}
interface Deck {
	suits: string[];
	cards: number[];
	createCardPicker(this: Deck): () => Card;
}
let deck2: Deck = {
	suits: ["hearts", "spades", "clubs", "diamonds"],
	cards: Array(52),
	createCardPicker: function(this: Deck) {
			return () => {
					let pickedCard = Math.floor(Math.random() * 52);
					let pickedSuit = Math.floor(pickedCard / 13);

					return {suit: this.suits[pickedSuit], card: pickedCard % 13};
			}
	}
}

let cardPicker2 = deck2.createCardPicker();
let thePickedCard2 = cardPicker2();

console.log("card: " + thePickedCard2.card + " of " + thePickedCard2.suit);