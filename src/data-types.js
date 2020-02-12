function pow(n) {
    return n * n;
}
pow(4);
// pow('x'); // <-- will throw an error
// Any type In TypeScript everything needs to have a type at
// compile time, and is the default type when you (the programmer) and the TS typechecker 
// can’t figure out what type something is. It’s a last resort type, and it should
// avoided when possible.
var a = 42;
var b = ['I am b'];
var c = a + b; // <- this is not something you normaly want
var d = "ddd";
d.toUpperCase();
// unknown - is a more stricter type than any.
var getAnimal = function () {
    var t;
    t = "ddd";
    return t;
};
var ukn = getAnimal();
// ukn.toUpperCase() // <-- won't work
if (typeof ukn === "string") {
    ukn.toLowerCase(); // It can be used only when using control-flow based type narrowing (type guard)
}
// boolean it also works without explicitly specifying the type, because of type inference
var isBoolean = true;
// number 
var nr = 3;
var nr4 = 4;
var infinity = Infinity;
// bigint - is a newcomer to JavaScript and TypeScript: it lets you work with large integers without
// running into rounding errors. While the type can only represent whole numbers up to 2^53 ,
// can represent integers bigger than that. From the js specs bigInt is supposed to 
// be arbitrary-precision integers, whose "digits of precision are limited only by the 
// available memory of the host system".
// let bigNumber :bigint = 8938984394893483948394n;   // not supported in es5
// string 
var str = "Hello";
// symbol - Starting with ECMAScript 2015, symbol is a primitive data type, 
// just like number and string.
var sym = Symbol("attr"); // not supported in es5
var sym2 = Symbol("key");
var sym3 = Symbol("key");
sym2 === sym3; // false, symbols are unique
// Symbols are great if you want to have comparable values that are exclusive and unique. 
// For runtime switches or mode comparisons:
var LEVEL_DEBUG = Symbol('DEBUG');
var LEVEL_WARN = Symbol('WARN');
// object - is a little narrower type than any, but not by much. It doesn’t tell you a lot 
// about the value it describes, just that the value is a JavaScript object (and that it’s not
//  null).
var obj1 = { a: 1 };
// console.log(obj1.a) // <-- it complains about the 'a' attribute
var obj2 = { a: 4 };
// NOTE One of TypeScript’s core principles is that type checking focuses on the shape 
// that values have. This is sometimes called “duck typing” or “structural subtyping”.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Jim", 25);
var obj3 = person; // A concrete class is assigned to an object.
var cyborg = { name: "cyborg", age: 4, batteryLevel: 100 };
// Arrays 
var arr1 = [1, 2, 3];
arr1.push(4);
// arr1.push("5") // <--- will trow a compile error
var arr2 = ["apple", "pear", "banana"];
var arr3 = new Array();
var arr4;
var arr5 = [1, "b"]; // <-- what type has this array ?
// Tuples - Tuples are subtypes of Array. They’re a special way to type arrays 
// that have fixed lengths, where he values at each index have specific, known types.
var tup1 = [10, "Participants", "Typescript"];
var tup2; // <-- The ? denotes an optional parameter
tup2 = [10, "test"];
tup2 = [11, "Participants", true];
var tup3 = [
    [1, "John"],
    [2, "Matt"]
];
var tup4 = ["apple", "peach", "oranges"]; // <-- Tuples support rest elements
tup4 = ["peach"];
// tup4 = [] // will fail because the tuple requires at least one element
// Readonly array and tuples
var immutableArr1 = [1, 2, 3, 4];
var immutableArr2 = immutableArr1.concat([5]);
// immutableArr2.push(6) // <-- throws an error
// immutableArr2[5] = 6;  // <-- throws an error as well
// null and undefined - JS has two values to represent an absence of something: null and undefined.
// TypeScript supports both of these as values;
var undefVar; // <--this variable is undefined
var nullVar = null;
// void, and never
function doSideEffect(person) {
    person.name = person.name.toUpperCase();
    person.age = person.age + 2;
}
function neverReturn() {
    throw TypeError("No return");
}
// Enums - are used to enumerate the possible values for a type
var Workshops;
(function (Workshops) {
    Workshops[Workshops["Typescript"] = 0] = "Typescript";
    Workshops[Workshops["Angular"] = 1] = "Angular";
    Workshops[Workshops["RxJS"] = 2] = "RxJS";
})(Workshops || (Workshops = {}));
var WorkshopsWithOwnIndex;
(function (WorkshopsWithOwnIndex) {
    WorkshopsWithOwnIndex[WorkshopsWithOwnIndex["Typescript"] = 100] = "Typescript";
    WorkshopsWithOwnIndex[WorkshopsWithOwnIndex["Angular"] = 101] = "Angular";
    WorkshopsWithOwnIndex[WorkshopsWithOwnIndex["RxJS"] = 102] = "RxJS";
})(WorkshopsWithOwnIndex || (WorkshopsWithOwnIndex = {}));
var workshop1 = Workshops.Typescript; // Enum maps from string to number
Workshops[4]; // <-- it works !?
// ConstWorkshops[4] // <-- Now it throws an error when trying to access an element by index
var WorkshopsTitled;
(function (WorkshopsTitled) {
    WorkshopsTitled["Typescript"] = "ts";
    WorkshopsTitled["Angular"] = "ng";
    WorkshopsTitled["RxJS"] = "rx";
})(WorkshopsTitled || (WorkshopsTitled = {}));
var workshop2 = WorkshopsTitled.RxJS;
function getFavWorkshop(w) {
    return "Favorite " + w;
}
getFavWorkshop(4); // <-- it works !?
function getFavWorkshopTitled(w) {
    return "Favorite " + w;
}
// getFavWorkshopTitled(2) // <-- it fails
// NOTE Use the enums with const keyword. 
