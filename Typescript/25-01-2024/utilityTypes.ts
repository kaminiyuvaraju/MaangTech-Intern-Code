interface Point {
    x: number;
    y: number;
  }
              
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;
  
  console.log(pointPart);


  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };


  type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};