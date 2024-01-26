class Person {
    name: string;
  }
        
  const person = new Person();
  person.name = "Jane";
  
  console.log(person);


  class Person1 {
    // name is a private member variable
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person1 = new Person1("Jane");
  console.log(person1.getName());


  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }

  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // getArea gets inherited from Rectangle
  }


  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // getArea gets inherited from Rectangle
  }