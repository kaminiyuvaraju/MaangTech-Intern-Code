const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo1").innerHTML = text;


let text1 = "";

for (let i = 0; i < 5; i++) {
  text1 += "The number is " + i + "<br>";
}

document.getElementById("demo2").innerHTML = text1;


const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo3").innerHTML = txt;


let language = "JavaScript";

let text2 = "";
for (let x of language) {
  text2 += x + "<br>";
}

document.getElementById("demo4").innerHTML = text2;