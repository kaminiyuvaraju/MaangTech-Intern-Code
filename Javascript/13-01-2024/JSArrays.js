const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars;


cars[0] = "Opel";
document.getElementById("demo2").innerHTML = cars;

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits.toString();

let size = fruits.length;
document.getElementById("demo4").innerHTML = size;

document.getElementById("demo5").innerHTML = fruits[0];

document.getElementById("demo6").innerHTML = fruits[fruits.length - 1];

let text = "<ul>";
for (let i = 0; i < size; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo7").innerHTML = text;

document.getElementById("demo8").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo9").innerHTML = fruits;
}
myFunction();