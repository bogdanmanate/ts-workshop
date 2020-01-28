// In JS and as well in Typescript the functions are first class objects.
function sum(a: number, b: number): number {
    return a+b;
}

// Function expression
let fun1 = function (name:string) {
    return name.toUpperCase()
}

// Arrow function expression 
let fun2 = (name:string) => {
    return name.toUpperCase()
}

// Functions can have optionl parameters
let fun3 = (name:string, age? :number) => {
    let tagName = name.toUpperCase();
    if (age) {
        tagName += ' ' + age;
    }
    return tagName;
}

// Default params
let fun4 = (name:string, age :number = 18) => {
    if (age < 18) {
        return `You're not allowed to drive ${name}`; // <-- string interpolation
    }
    return `Please provide driver licence, ${name}`;
}

// Variable number of params (Rest parameters)
let fun5 = (firstName: string, ...restOfName: string[]) => {
    return firstName + " " + restOfName.join(" ");
}
fun5("Juan", "Jose", "Mendoza", "Martinez", "Perez")


// Passing functions as parameters.
let fun6 = (f: (x:number, y:number)=> number, a:number, b:number ) =>  f(a, b) // <-- What ??

type SumFunc = (x:number, y:number)=> number;

let fun7 = (f: SumFunc, a: number, b: number) => f(a,b)


// Generators - very useful when generating an array containing a large number of elements
// The elements will be generated only when calling next().
function* fun8() {
    if (Math.random() < 0.5) yield 100;
    return "Finished!"
}
// The function generates following values when calling next
// {value: 100, done: false}
// {value: 100, done: false}
// {value: 100, done: false}
// ......
// {value: "Finished!", done: true}

let iter = fun8();
let curr = iter.next();
if (curr.done) {
    // TypeScript 3.5 and prior thought this was a 'string | number'.
    // It should know it's 'string' since 'done' was 'true'!
    curr.value // <- string
} else {
    curr.value // <- number
}

// Contextual Typing 
fun7((a,b) => a + b, 5, 9); // No explicit type for a and b. The types are infered from fun7 signature

// Overloaded function types
type ReverseHandler = {
    (msg: string): string;
    (msgs: string[]): string;
}

let msgHandler :ReverseHandler = (msg:string| string[]): string => {
    return ''
}

// Generic type parameters

function numberTransformer(arr: number[], f: (x: number) => number): number[] {
    let tmp :number[]= []
    arr.forEach(x => tmp.push(f(x)))
   return tmp;
}

// What about transforming on an array of strings ???

function stringTransformer(arr: string[], f: (x: string) => string): string[] {
    let tmp :string[]= []
    arr.forEach(x => tmp.push(f(x)))
   return tmp;
}

function map<U, M>(arr: U[], f: (x: U) => M): M[] {
    let tmp :M[]= []
    arr.forEach(x => tmp.push(f(x)))
   return tmp;
}

let students = ["John", "Matt", "Michael"]
let filterNames = (name: string): boolean => {
    if (name.startsWith("M")) {
        return true;
    } else {
        return false;
    }
}
let stringMap = map(students, filterNames)