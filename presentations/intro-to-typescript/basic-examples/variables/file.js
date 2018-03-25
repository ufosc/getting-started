// var examples
// Variable declaration is moved to top
++q;
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
function h(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(h(true)); // '10'
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
function j(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var b = a + 1;
        return b;
    }
    // return b; // Error: 'b' doesn't exist here
}
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
};
// This loop works
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
// consts examples
var numLivesForCat = 9;
// numLivesForCat = 10; // Error

console.log(Number.MAX_SAFE_INTEGER);