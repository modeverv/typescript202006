export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
    cry(): string {
        return "Gaooooo";
    }
}
class Tiger extends Animal {
    cry(): string{
        return "hogehogeo";
    }
}

console.log(new Lion().cry())
