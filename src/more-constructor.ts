export {};

class Person {
  constructor(public name: string, protected age: number) {}
}
const me = new Person('ハム', 432);
console.log(me);
