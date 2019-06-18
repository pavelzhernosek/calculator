const SqlCalc = require("../SqlCalsEs5");

let myCalculator = new SqlCalc(100);

test("", () => {
  expect(myCalculator.sum(1, 2, 3)).toBe(11236);
});

test("sum1", () => {
  expect(() => myCalculator.sum(1, null, 3)).toThrow();
});

test("dif", () => {
  expect(myCalculator.dif(10, 20)).toBe(4900);
});

test("div", () => {
  expect(myCalculator.div(2, 2)).toBe(625);
});

test("mul", () => {
  expect(myCalculator.mul(2, 2)).toBe(160000);
});

test("sum2", () => {
  expect(myCalculator.sum()).toBe(10000);
});

test("string", () => {
  expect(() => myCalculator.sum(1, "", 3)).toThrow();
});

test("div", () => {
  expect(() => myCalculator.div(2, 2, 0)).toThrow();
});
