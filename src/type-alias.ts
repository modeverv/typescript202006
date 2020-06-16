export {};

type Mojiretsu = string;

let a: Mojiretsu = 'hogehoge';
let b: string = 'hoefe';

type Object1 = {
  name: string;
  age: number;
};
let c: Object1 = {
  name: 'hoge',
  age: 18,
};

type E1 = typeof c;
