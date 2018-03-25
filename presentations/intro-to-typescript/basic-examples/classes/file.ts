// Classes

// Basic class definition, note: this references the class
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

// Instance of a class
let greeter = new Greeter("world");

// Inheritance, note super() must be called in constructor and acts like "this", but for the parent
class Animal {
	constructor(theName: string) { this.name = theName; }
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Snake extends Animal {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}

class Horse extends Animal {
	constructor(name: string) { super(name); }
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move(); // Slithering...
// Sammy the Python moved 5m
tom.move(34); // Galloping...
// Tommy the Palomino moved 34m.

// Public, private, protected (private, but accessible by children)
class Manimal {
	public name: string;
	public constructor(theName: string) { this.name = theName; }
	public move(distanceInMeters: number) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

class Person {
	protected name: string;
	private age: number;
	constructor(name: string) { this.name = name; }
}

// Readonly, must be set at deceleration or in constructor
class Octopus {
	readonly name: string;
	readonly numberOfLegs: number = 8;
	constructor (theName: string) {
		this.name = theName;
	}
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // Error

// Shorthand to create properties in constructor
class Squid {
	readonly numberOfLegs: number = 9;
	constructor(public age: number, readonly name: string) {
	}
}

// Getters and Setters (for ES5 and up)
let passcode = "secret passcode";

class Employee {
	private _fullName: string;

	get fullName(): string {
		return this._fullName;
	}

	set fullName(newName: string) {
		if (passcode && passcode == "secret passcode") {
			this._fullName = newName;
		}
		else {
			console.log("Error: Unauthorized update of employee!");
		}
	}
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
	console.log(employee.fullName);
}

// Static 
class Grid {
	static origin = {x: 0, y: 0};
	calculateDistanceFromOrigin(point: {x: number; y: number;}) {
		let xDist = (point.x - Grid.origin.x);
		let yDist = (point.y - Grid.origin.y);
		return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
	}
	constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}))

// Abstract 
abstract class Fanimal {
	abstract makeSound(): void;
	move(): void {
		console.log("roaming the earth...");
	}
}