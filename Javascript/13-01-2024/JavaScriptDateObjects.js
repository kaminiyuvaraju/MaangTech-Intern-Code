const d = new Date();
document.getElementById("demo1").innerHTML = d;

const e = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo2").innerHTML = e;

document.getElementById("demo4").innerHTML = d.toDateString();