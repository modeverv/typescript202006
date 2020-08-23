export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

let animal = new Animal('aaa');
console.log(animal.run());

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return super.run() + ` ${this.speed}km/h.` + this.name;
  }
}

let lion = new Lion('bbbb', 80);
console.log(lion.run());
