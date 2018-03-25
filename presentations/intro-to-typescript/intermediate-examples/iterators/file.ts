// Iterators

let list = [4, 5, 6];

// For..in get's keys
for (let i in list) {
   console.log(i); // "0", "1", "2",
}

// For..of get's values
for (let i of list) {
   console.log(i); // "4", "5", "6"
}