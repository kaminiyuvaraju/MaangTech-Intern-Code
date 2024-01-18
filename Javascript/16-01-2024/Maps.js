// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("demo1").innerHTML = fruits.get("apples");


  // Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

document.getElementById("demo2").innerHTML = fruits1.get("apples");


const fruits2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("demo3").innerHTML = fruits2.get("apples");