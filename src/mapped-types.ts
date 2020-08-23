export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

type PropertyTYpes = keyof Profile;

/**
 * Make all properties in T optional
 */
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfle = Optional<Profile>;
