export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    if (typeof value == 'number') {
        return value * 2
    }
    if (typeof value == 'string') {
        return value + value;
    }
}

//function double(value: string) : string {
//    return value + value
//}

console.log(double(100));
console.log(double('Ytpe'));
//console.log(double(true);
