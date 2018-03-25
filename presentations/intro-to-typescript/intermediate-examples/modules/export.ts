// Exporting modules

// Export deceleration
export interface StringValidator {
	isAcceptable(s: string): boolean;
}

// Export statements
class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string) {
			return s.length === 5;
	}
}
export { ZipCodeValidator };

// Default values are automatically exported, can be class, function, value, etc
export default "123";

// CommonJS and AMD Exporting, there is a single export object
/* let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidator; */

