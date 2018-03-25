// var examples

// Variable declaration is moved to top
++q
var q = 0;

console.log(q); // `NaN`

// Variables can be seen by inner functions
function f() {
	var a = 1;
	a = 2;
	var b = g();
	a = 3;

	return b;

	function g() {
			return a;
	}
}

console.log(f()); // `2`

// Variables are scoped to the function
function h(shouldInitialize: boolean) {
	if (shouldInitialize) {
			var x = 10;
	}

	return x;
}

console.log(h(true));  // '10'
console.log(h(false)); // 'undefined'
// console.log(x); // Error

// Variable i is 10 by the time it prints 
/* for (var i = 0; i < 10; i++) {
	setTimeout(function() { 
		console.log(i); 
	}, 100 * i);
} */

// Immediately Invoked Function Expression, a "work around"
/* for (var i = 0; i < 10; i++) {
	(function(i) {
			setTimeout(function() { 
				console.log(i); // Counts from 0 to 9
			}, 100 * i);
	})(i);
} */

// let examples

// Variable not scoped to function
function j(input: boolean) {
	let a = 100;

	if (input) {
			// Still okay to reference 'a'
			let b = a + 1;
			return b;
	}
	// return b; // Error: 'b' doesn't exist here
}

// This loop works
for (let i = 0; i < 10 ; i++) {
	setTimeout(function() { 
		console.log(i);
	}, 100 * i);
}

// consts examples

const numLivesForCat = 9;
// numLivesForCat = 10; // Error
