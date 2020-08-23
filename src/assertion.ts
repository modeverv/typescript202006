export {};

let name: any = 'hum';
let length = name.length as number;
let len = (name as string).length 
let l = (<string>name).length
console.log(length);
