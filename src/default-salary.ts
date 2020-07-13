export {};

const nextYearSalary = (currentSarlary: number, rate: number = 1.1) => {
  let s = currentSarlary * rate;
  console.log(s);
  return s;
};

nextYearSalary(1000)