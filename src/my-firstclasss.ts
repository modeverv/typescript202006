export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  prorile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('taro', 18);
console.log(taro.name);
console.log(taro.prorile());
//let hanako = new Person();
 