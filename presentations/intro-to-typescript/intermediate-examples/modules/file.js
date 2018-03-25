// Exporting modules
System.register("export", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZipCodeValidator;
    return {
        setters: [],
        execute: function () {// Exporting modules
            // Export statements
            ZipCodeValidator = class ZipCodeValidator {
                isAcceptable(s) {
                    return s.length === 5;
                }
            };
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    };
});
// Importing modules
System.register("import", ["export"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var export_1, aValidator, validator, myValidator;
    return {
        setters: [
            function (export_1_1) {
                export_1 = export_1_1;
                validator = export_1_1;
            }
        ],
        execute: function () {// Importing modules
            aValidator = new export_1.ZipCodeValidator();
            myValidator = new validator.ZipCodeValidator();
        }
    };
});
