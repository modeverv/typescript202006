export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  let _bmi = weight / (height * height);
  if (printable) {
    console.log(_bmi);
  }
  return _bmi;
};

console.log(bmi(1.78, 30));

// bmi(身長,体重,console.logで出力するかどうか)
bmi(1.78, 30, true);
bmi(1.78, 30, false);
bmi(1.78, 30);
