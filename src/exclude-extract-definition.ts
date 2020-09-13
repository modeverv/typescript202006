
export { };

type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeType = string | number | DebugType;
type TypeExcludeFunction = Exclude<SomeType, Function>;
type FunctionTYpeByExtract2 = Extract<SomeType, Function>;
type MyFType = MyExclude<SomeType, string|number >;
type NullableType = string | number | null | undefined;
type NonNullableTyep = NonNullable<NullableType>;


