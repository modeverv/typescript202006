export {};

interface Profile{
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}    
    
let profile: { 
//    name?: string,
//    [ index: typeForIndex : typeForValue
    [index:string] :string|number,
 } = {};
let hoge:Profile = {underTwenty:true}
profile.name = "Hame";
profile.age = 18
profile.natinality = 'japan'


