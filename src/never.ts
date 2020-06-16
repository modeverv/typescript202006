export {};

function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error("tes");
    console.log(result);
} catch (e) {
    console.log({ e });
}

let foo: void = undefined;
//let bar: never = undefined;
let bar2: never = error("hoge");