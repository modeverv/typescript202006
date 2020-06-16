
export { };
    
const kansu = () : number => 43;

let numberAny: any = kansu();
let numberUnkown: unknown = kansu();
let sumAny = numberAny + 10;
//let sumKnown = numberUnkown + 10;
if (typeof numberUnkown === 'number') {
    let sumKnown = numberUnkown + 10;
}

