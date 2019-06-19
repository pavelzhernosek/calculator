const Сalculator = require("./Сalculator");

class SqlCalc extends Сalculator {
  constructor(firstNumber) {
    super(firstNumber);
  }
  sum() {
    return Math.pow(super.sum(...arguments), 2);
  }
  dif() {
    return Math.pow(super.dif(...arguments), 2);
  }
  div() {
    return Math.pow(super.div(...arguments), 2);
  }
  mul() {
    return Math.pow(super.mul(...arguments), 2);
  }
}

// const sql = new SqlCalc(100);
// console.log(sql.sum(1, 2, 3));

module.exports = SqlCalc;
