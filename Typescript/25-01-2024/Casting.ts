let x: unknown = 'hello';
console.log((x as string).length);



let y : unknown = 'hello';
console.log((<string>y).length)


let z = 'hello';
console.log(((z as unknown) as number).length);