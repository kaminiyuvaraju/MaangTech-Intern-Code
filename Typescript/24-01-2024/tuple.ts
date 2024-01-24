// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

// // define our tuple
// let ourTuple: [number, boolean, string];

// // initialize incorrectly throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

// console.log(ourTuple);


// define our tuple
let ourTuple1: [number, boolean, string];

// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');

console.log(ourTuple1);


// define our tuple
let ourTuple2: [number, boolean, string];

// initialize correctly
ourTuple2 = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple2.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');