const letters = new Set(["a","b","c"]);
document.getElementById("demo1").innerHTML = letters.size;



const letters1 = new Set();
letters1.add("a");
letters1.add("b");
letters1.add("c");

document.getElementById("demo2").innerHTML = letters1.size;


// Create a Set
const letters2 = new Set();

// Add values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");

// Display set.size
document.getElementById("demo3").innerHTML = letters2.size;