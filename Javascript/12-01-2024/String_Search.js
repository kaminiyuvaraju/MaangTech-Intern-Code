let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.indexOf("locate");  //indexOf()
document.getElementById("demo1").innerHTML = index1; 

let text2 = "Please locate where 'locate' occurs!";
let index2 = text2.lastIndexOf("locate"); //lastIndexOf()
document.getElementById("demo2").innerHTML = index2; 

let text3 = "Please locate where 'locate' occurs!";
let index3 = text3.search("locate"); //search()
document.getElementById("demo3").innerHTML = index3; 

let text4 = "The rain in SPAIN stays mainly in the plain";
let match = text4.match("ain"); //match
document.getElementById("demo4").innerHTML = match; 

let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text5.matchAll("Cats"); //matchAll
document.getElementById("demo5").innerHTML = Array.from(iterator);

let text6 = "Hello world, welcome to the universe.";
let include = text6.includes("world"); //includes()
document.getElementById("demo6").innerHTML = include;

let text7 = "Hello world, welcome to the universe.";
let startsWith = text7.startsWith("Hello");  //startsWith() 
document.getElementById("demo7").innerHTML = startsWith;

let text8 = "John Doe";
let endsWith = text8.endsWith("Doe");  
document.getElementById("demo8").innerHTML = endsWith; 