export {};

type Profile = {
  name: string;
  age: number;
  zipcode: number;
};
type Profile2 = {
  name?: string;
  age?: number;
};
type Profile3 = {
  name: string;
  age?: number;
};

type PartialType = Partial<Profile>;

let l: PartialType = {
  name: 'hoge',
  age: 18,
  zipcode: 333,
};

type RequiredType = Required<Profile3>;
let x: RequiredType = {
  name: 'fuga',
  age: 32,
};
