// Importing modules

// Import statement, can rename value
import { ZipCodeValidator as ZCV} from "./export";

let aValidator = new ZCV();

// Import entire module into variable
import * as validator from "./export";
let myValidator = new validator.ZipCodeValidator();

// Import default value
import num from "./export";
console.log(num); // Print "123"

// CommonJS and AMD Importing
/* import zip = require("./ZipCodeValidator");

// Validators to use
let validator = new zip(); */