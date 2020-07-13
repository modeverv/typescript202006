export {};

function bmi(height: number, weight: number) :number{
  return weight / (height * height);
}

var _bmi:number = bmi(1.78, 85);

console.log(_bmi);
