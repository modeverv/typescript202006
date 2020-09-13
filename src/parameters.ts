export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('hoge', 44);

type Profile = Parameters<typeof debugProfile>;

const progile: Profile = ['hoge', 44];

debugProfile(...progile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

