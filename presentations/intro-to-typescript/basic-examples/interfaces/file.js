// Interfaces
// Type check it
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
// This object fulfills the contract 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
// We would get an error if function miss-typed color for instance
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// Make a black square, but otherwise the default values
let mySquare = createSquare({ color: "black" });
let p1 = { x: 10, y: 20 };
