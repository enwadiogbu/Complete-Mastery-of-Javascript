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



// Complex Datatypes
// Objects and Symbols are complex datatypes