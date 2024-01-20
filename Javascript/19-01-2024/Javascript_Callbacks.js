function myDisplayer(some) {
    document.getElementById("demo1").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();


function myDisplayer2(some) {
    document.getElementById("demo2").innerHTML = some;
  }
  
  function myFirst1() {
    myDisplayer2("Hello");
  }
  
  function mySecond1() {
    myDisplayer2("Goodbye");
  }
  
  mySecond1();
  myFirst1();

  function myDisplayer3(some) {
    document.getElementById("demo3").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer3(result);


  function myDisplayer4(some) {
    document.getElementById("demo4").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer4(value);},
    function(error) {myDisplayer4(error);}
  );


const myPromise2 = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("I love You !!"); }, 3000);
});

myPromise2.then(function(value) {
  document.getElementById("demo5").innerHTML = value;
});