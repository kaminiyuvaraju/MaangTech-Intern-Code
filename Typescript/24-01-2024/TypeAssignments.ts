

let firstName: string = "Yuva"; // type string

console.log(typeof firstName);


let SurName = "Kamini";
console.log(typeof SurName);


let v: any = true;

v = "string"; // no error as it can be "any" type

// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in

console.log(Math.round(v)); // no error as it can be "any" type


let w: unknown = 1; 
w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void }

// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
} 
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting