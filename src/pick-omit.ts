export {};


type DetailedProfile = {
    name: string;
    height:number;
    weight: number;
}
type SimpleProfile = Pick<DetailedProfile, 'name' | 'height'>
type Simeple2 = Omit<DetailedProfile, 'name' | 'height'>
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
