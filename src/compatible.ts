export { };
    
    
let fooCompatible: any;
let barCompatible: string = 'TypeScript'

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooImcomatible: string;
let barImcompatible: number = 10;

// fooImcomatible = barImcompatible;

let fooString: string;
let barString: string = 'Hoge';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1700 = 1700;
fooNumber = fooNumberLiteral;

interface Animal{
    age: number;
//    name: string;
}
class Person{
    constructor(public age: number) {
        
    }
}

let me: Animal;
let mm = new Person(18);
me = mm;
