const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits.join(" * ");


document.getElementById("demo2").innerHTML = fruits;
fruits.pop();
document.getElementById("demo3").innerHTML = fruits;


fruits.push("Kiwi");
document.getElementById("demo4").innerHTML = fruits;

fruits.shift();
document.getElementById("demo5").innerHTML = fruits;

document.getElementById("demo6").innerHTML = fruits.unshift("Lemon");
document.getElementById("demo7").innerHTML = fruits;

document.getElementById("demo8").innerHTML = fruits.copyWithin(2,0,2);


const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
document.getElementById("demo9").innerHTML = newArr;


document.getElementById("demo10").innerHTML = fruits;

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo11").innerHTML = fruits;