class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }

    get cnam() {
        return this.carname;
      }
      set cnam(x) {
        this.carname = x;
      }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
    
  }
  
  const myCar = new Model("Ford", "Mustang");
  document.getElementById("demo1").innerHTML = myCar.show();

  document.getElementById("demo2").innerHTML = myCar.cnam;