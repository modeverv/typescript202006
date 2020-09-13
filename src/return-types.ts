export {};

function add(a:number, b:number) {
  return a + b;
}

var a:number = add(1, 2);
console.log(a)
type ReturnTYpeFromAdd = ReturnType<typeof add>

