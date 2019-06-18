const Сalculator = require("../СalculatorEs6");

const testVal = 55;
const testCase1 = [1, 2, 3];

const calc = new Сalculator(testVal);

test(`Вычисление суммы `, () => {
  expect(calc.sum(...testCase1)).toBe(61);
});

test(`Вычисление разности `, () => {
  expect(calc.dif(...testCase1)).toBe(49);
});

test(`Вычисление произведения `, () => {
  expect(calc.mul(...testCase1)).toBe(330);
});

test(`Вычисление частного `, () => {
  expect(calc.div(...testCase1)).toBe(9.17);
});

test("Sum, один из параметров пустая строка", () => {
  expect(() => calc.sum(1, "", 3)).toThrow(
    "Error! The transferred parameter has to be number"
  );
});

test("undefined", () => {
  expect(() => calc.sum(1, undefined, 3)).toThrow(
    "Error! The transferred parameter has to be number"
  );
});

test("без параметров", () => {
  expect(calc.sum()).toBe(55);
});

test("Умножение на 0", () => {
  expect(calc.mul(12, 0, 3)).toBe(0);
});

test("Умножение на строку", () => {
  expect(() => calc.mul(12, "", 3)).toThrow(
    "Error! The transferred parameter has to be number"
  );
});

test("Деление на 0", () => {
  expect(() => calc.div(1, 0, 3)).toThrow();
});
