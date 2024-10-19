// Primitive Datatypes
// strings, numbers, booleans, null, and undefined are primitive datatypes

// String - represent text
const a = 'Hello Emeka. I need your help doing this assignment.';
console.log(a);

// Numbers - represent numbers or digits
const b = 123;
const c = 456;
const d = b + c;

console.log(d);


// Backticks as strings are used to create a dynamic string of characters
const age = 45;
console.log(`Emeka is ${age}`);

// Booleans - represent a logical entity and can only have two possible values (true or false)

const didVote = 80;
const e = `Did 65% of the population in Texas vote? ${didVote}`;

if(didVote >= 65) {
    console.log(e, true);
}else {
    console.log(e, false);
}


// Null - represents empty or nothing
let age2 = null;

age2 = 45;

console.log(age2);

// Undefined - a variable that is not assigned or have a value is declared

let f;

console.log(f);

// Complex Datatypes
// Objects and Symbols are complex datatypes 
// Objects are the most important data-type

const g = {
    person: 'John',
    age: 25,
};

console.log(g);
console.log(g.person);
console.log(g.age);

console.log(typeof g.person);

// Arrays store ordered data collections
const h = [
    i = {
        keybord: 'MPC Key 37',
        software: 'MPC 3.0'
    },
    j = {
        keybord: 'Korg Triton',
        software: 'Korg internal'
    },
    k = {
        keybord: 'Moog Grandmother',
        software: 'internal synth'
    }
    
];

console.log(h[1].keybord);


// Statically typed language
 // programs like C++ are statically typed where variables can only be defined by specific data type eg. int age = 45;


// Dynamically typed language
// javascript is dynamically typed meaning variables can contain any data


let message = "Hello, World!";

message = 123456;

console.log(message);