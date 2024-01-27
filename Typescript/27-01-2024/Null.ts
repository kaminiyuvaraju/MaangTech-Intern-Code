let value: string | undefined | null = null;
value = 'hello';
value = undefined;

interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
  
  let home: House = {
    sqft: 500
  };
  
  printYardSize(home);


  function getValue(): string | undefined {
    return 'hello';
  }
  let value1 = getValue();
  console.log('value length: ' + value1!.length);