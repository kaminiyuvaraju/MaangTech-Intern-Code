document.getElementById("demo1").innerHTML =
Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" +
Number("") + "<br>" +
Number("99 88") + "<br>" +
Number("John") + "<br>";

let y = "5";
let x = + y;
document.getElementById("demo2").innerHTML = typeof y + "<br>" + typeof x;


let z = 123;
document.getElementById("demo3").innerHTML =
  String(z) + "<br>" +
  String(123) + "<br>" +
  String(100 + 23);