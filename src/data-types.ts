function pow(n: number) {
    return n * n;
}

pow(4);
// pow('x'); // <-- will throw an error


// Any type In TypeScript everything needs to have a type at
// compile time, and is the default type when you (the programmer) and the TS typechecker 
// can’t figure out what type something is. It’s a last resort type, and it should
// avoided when possible.

let a: any = 42;
let b: any = ['I am b']
let c :any = a + b;  // <- this is not something you normaly want
let d :any = "ddd"
d.toUpperCase()

// unknown - is a more stricter type than any.
const getAnimal = () => {
    let t: unknown;
    t = "ddd"
    return t;
}
const ukn = getAnimal();
// ukn.toUpperCase() // <-- won't work

if (typeof ukn === "string") {
    ukn.toLowerCase() // It can be used only when using control-flow based type narrowing (type guard)
}


// boolean it also works without explicitly specifying the type, because of type inference
let isBoolean :boolean = true; 

// number 
let nr :number = 3;
let nr4 :4 = 4; 
let infinity :number = Infinity;

// bigint - is a newcomer to JavaScript and TypeScript: it lets you work with large integers without
// running into rounding errors. While the type can only represent whole numbers up to 2^53 ,
// can represent integers bigger than that. From the js specs bigInt is supposed to 
// be arbitrary-precision integers, whose "digits of precision are limited only by the 
// available memory of the host system".
// let bigNumber :bigint = 8938984394893483948394n;   // not supported in es5

// string 

let str :string = "Hello"


// symbol - Starting with ECMAScript 2015, symbol is a primitive data type, 
// just like number and string.
let sym = Symbol("attr"); // not supported in es5
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols are unique
// Symbols are great if you want to have comparable values that are exclusive and unique. 
// For runtime switches or mode comparisons:
const LEVEL_DEBUG = Symbol('DEBUG')
const LEVEL_WARN = Symbol('WARN')


// object - is a little narrower type than any, but not by much. It doesn’t tell you a lot 
// about the value it describes, just that the value is a JavaScript object (and that it’s not
//  null).
let obj1 :object = {a: 1};
// console.log(obj1.a) // <-- it complains about the 'a' attribute

let obj2 :{a: number} = {a:4};

// NOTE One of TypeScript’s core principles is that type checking focuses on the shape 
// that values have. This is sometimes called “duck typing” or “structural subtyping”.
class Person {
    constructor( 
        public name: string,
        public age: number) {}
}

let person = new Person("Jim", 25);

let obj3: {name:string, age:number} = person; // A concrete class is assigned to an object.


// Type aliases
type Age = number;
type Human = {name: string, age: Age}

// Union and Intersection
type Robot = {batteryLevel: number}
type HumanOrRobot = Human | Robot;
type Cyborg = Human & Robot;
let cyborg = {name: "cyborg", age: 4, batteryLevel: 100}


// Arrays 
let arr1 = [1,2,3]
arr1.push(4);
// arr1.push("5") // <--- will trow a compile error
let arr2 = ["apple", "pear", "banana"];
let arr3 = new Array<string>();
let arr4: string[];
let arr5 = [1, "b"] // <-- what type has this array ?

// Tuples - Tuples are subtypes of Array. They’re a special way to type arrays 
// that have fixed lengths, where he values at each index have specific, known types.
let tup1: [number, string, string] = [10, "Participants", "Typescript"]
let tup2: [number, string, boolean?]; // <-- The ? denotes an optional parameter
tup2 = [10, "test"];
tup2 = [11, "Participants", true]

let tup3: [number, string][] = [   // <-- What kind of data structure is this ?
    [1, "John"],
    [2, "Matt"]
]

let tup4: [string, ...string[]] = ["apple", "peach", "oranges"]; // <-- Tuples support rest elements
tup4 = ["peach"] 
// tup4 = [] // will fail because the tuple requires at least one element

// Readonly array and tuples
let immutableArr1: readonly number[] = [1,2,3,4]
let immutableArr2: readonly number[] = immutableArr1.concat([5])
// immutableArr2.push(6) // <-- throws an error
// immutableArr2[5] = 6;  // <-- throws an error as well

// null and undefined - JS has two values to represent an absence of something: null and undefined.
// TypeScript supports both of these as values;
let undefVar: string; // <--this variable is undefined
let nullVar = null 

// void, and never
function doSideEffect(person: Person) {
    person.name = person.name.toUpperCase();
    person.age= person.age + 2;
}

function neverReturn(): never {
    throw TypeError("No return")
}


// Enums - are used to enumerate the possible values for a type
enum Workshops {
    Typescript,
    Angular,
    RxJS
}

enum WorkshopsWithOwnIndex {
    Typescript = 100,
    Angular = 101,
    RxJS = 102
}
let workshop1: number = Workshops.Typescript; // Enum maps from string to number
Workshops[4] // <-- it works !?

const enum ConstWorkshops {
    Typescript,
    Angular,
    RxJS
}

// ConstWorkshops[4] // <-- Now it throws an error when trying to access an element by index

enum WorkshopsTitled {
    Typescript = "ts",
    Angular = "ng",
    RxJS ="rx"
}
let workshop2: string = WorkshopsTitled.RxJS;

function getFavWorkshop(w: Workshops): string {
    return "Favorite " + w;
}

getFavWorkshop(4); // <-- it works !?

function getFavWorkshopTitled(w: WorkshopsTitled): string {
    return "Favorite " + w;
}
// getFavWorkshopTitled(2) // <-- it fails

// NOTE Use the enums with const keyword. 

