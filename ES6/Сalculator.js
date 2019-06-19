class Сalculator {
  constructor(firstNumber) {
    this.firstNumber = firstNumber;
  }

  sum() {
    return (
      this.firstNumber +
      [...arguments].reduce((total, number) => {
        this.checker(number);
        return total + number;
      }, 0)
    );
  }

  dif() {
    return (
      this.firstNumber -
      [...arguments].reduce((total, number) => {
        this.checker(number);
        return total + number;
      }, 0)
    );
  }
  div() {
    return (
      Math.round(
        [...arguments].reduce((total, number) => {
          this.checker(number);
          if (number === 0) {
            throw new Error("Ошибка! Деление на 0!");
          }
          return total / number;
        }, this.firstNumber) * 100
      ) / 100
    );
  }
  mul() {
    return [...arguments].reduce((total, number) => {
      this.checker(number);
      return total * number;
    }, this.firstNumber);
  }
}

Сalculator.prototype.checker = function(item) {
  if (typeof item !== "number") {
    throw new Error("Error! The transferred parameter has to be number");
  }
};

module.exports = Сalculator;
