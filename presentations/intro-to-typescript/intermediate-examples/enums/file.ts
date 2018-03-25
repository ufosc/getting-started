// Enums

// Enums can have explicit values
enum Color {Red = 1, Green = 2, Blue = 4};
console.log(Color.Green); // Prints "2"
console.log(Color[2]); // Prints "Green"

// By default the first item is 0 than counts up, here it starts at 1
enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}

console.log(Direction.Down); // Prints 2

// Use of enums as types
function respond(recipient: string, message: Direction): void {
	// ...
}

respond("Princess Caroline", Direction.Left);

// String enums
enum Directions {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

// Mixed enums...
enum BooleanLikeHeterogeneousEnum {
	No = 0,
	Yes = "YES", // Please don't do this
}

// Computed enums, must be after constant members
enum FileAccess {
	// constant members
	None,
	Read    = 1 << 1,
	Write   = 1 << 2,
	ReadWrite  = Read | Write,
	// computed member
	G = "123".length
}