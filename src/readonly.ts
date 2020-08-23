export {};


class VisaCard{
    readonly owner: string;

    constructor(owner: string) {
        this.owner = owner;
    }
}
class Visa{
    constructor(public readonly owner: string) {
        
    }
}
class V {
    constructor(readonly owner: string) {
        
    }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'べーこん';