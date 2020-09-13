export {};

type DebugType = () => void;
type SomeType = string | number | DebugType;
type FunctionType = Exclude<SomeType, string | number>;
type NonFunctionType = Exclude<SomeType, DebugType>;
type TypeExcludeFunction = Exclude<SomeType, Function>;

type FunctionTypeByExtract = Extract<SomeType, DebugType>;
type NonFunctionTYpeByExtract = Extract<SomeType, string | number>;
type FunctionTYpeByExtract2 = Extract<SomeType, Function>;

type NullableType = string | number | null | undefined;
type NonNullableTyep = NonNullable<NullableType>;
