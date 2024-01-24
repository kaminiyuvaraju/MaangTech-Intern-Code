// Try playing around with modifying properties and adding ones to see what happens
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  
  console.log(car);

  const car1 = {
    type: "Toyota",
  };
  
  car1.type = "Ford"; // no error
  
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
  
  console.log(car1);