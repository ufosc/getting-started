// Namespaces

// Namespace they can be in a single file
namespace Validation {
	export interface StringValidator {
		isAcceptable(s: string): boolean;
	}

	const lettersRegexp = /^[A-Za-z]+$/;
	const numberRegexp = /^[0-9]+$/;

	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return lettersRegexp.test(s);
		}
	}

	export class ZipCodeValidator implements StringValidator {
		isAcceptable(s: string) {
			return s.length === 5 && numberRegexp.test(s);
		}
	}
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Namespace across multiple files

// In Validation.ts
namespace Validation {
	export interface StringValidator {
			isAcceptable(s: string): boolean;
	}
}

// In other files, reference it
/// <reference path="Validation.ts" />
namespace Validation {
	const lettersRegexp = /^[A-Za-z]+$/;
	export class LettersOnlyValidater implements StringValidator {
			isAcceptable(s: string) {
					return lettersRegexp.test(s);
			}
	}
}

// Namespace aliases
namespace Shapes {
	export namespace Polygons {
		export class Triangle { }
		export class Square { }
	}
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square();