let x = 123;
document.getElementById("demo1").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();


let y = 9.656;
   document.getElementById("demo2").innerHTML =
     y.toExponential() + "<br>" + 
     y.toExponential(2) + "<br>" + 
     y.toExponential(4) + "<br>" + 
     y.toExponential(6);

let z = 9.656;
     document.getElementById("demo3").innerHTML =
       x.toFixed(0) + "<br>" +
       x.toFixed(2) + "<br>" +
       x.toFixed(4) + "<br>" +
       x.toFixed(6);

let p = 9.656;
       document.getElementById("demo4").innerHTML = 
         x.toPrecision() + "<br>" +
         x.toPrecision(2) + "<br>" +
         x.toPrecision(4) + "<br>" +
         x.toPrecision(6); 