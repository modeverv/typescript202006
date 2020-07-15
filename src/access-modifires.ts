export { };

class Person {
  static HOGE = 'aaaa';
  public name: string;
  private age: number;
  protected nationarity: string;
  constructor(name: string, age: number, nationarity: string = 'Jp') {
    this.name = name;
    this.age = age;
    this.nationarity = nationarity;
  }
  public prorile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
class Android extends Person {
  constructor(name: string, age: number, nationarity: string = 'Jp') {
    super(name, age, nationarity);
  }
  public prorile(): string {
    return `name: ${this.name}, in ${this.nationarity}`;
  }
}
let taro = new Person('taro', 18);
console.log(taro.name);
//console.log(taro.age);
console.log(taro.prorile());
//let hanako = new Person();
console.log(Person.HOGE);