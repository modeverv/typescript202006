export {};

type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'hoge',
  age: 32,
};
me.age++;

console.log(me);

type ROProfile = Readonly<Profile>;
const friend: ROProfile = {
  age: 33,
  name: 'hogee,',
};
//friend.age++;

type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriProfile = Yomitori<Profile>;
const x: YomitoriProfile = {
  name: 'Hoge',
  age: 32,
};
