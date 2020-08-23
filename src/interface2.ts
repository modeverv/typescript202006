export { };
    
interface MahoTsukai
{
    mera(): string;
}   
interface Souryo
{
    hoimi(): string;
} 
class Taro implements MahoTsukai, Souryo {
    hoimi(): string {
        //throw new Error("Method not implemented.");
        return 'hoimi';
    }
    mera(): string{
        return 'mera'
    }
}

let t = new Taro();
console.log(t.mera());
console.log(t.hoimi());

let x: Souryo = new Taro();
x.hoimi();
