var Сalculator = require("./Calculator");

var SqlCalcEs5 = function(firstNumber) {
  Сalculator.apply(this, arguments);
};

SqlCalcEs5.prototype = Object.create(Сalculator.prototype);

SqlCalcEs5.prototype.sum = function() {
  return Math.pow(Сalculator.prototype.sum.apply(this, arguments), 2);
};
SqlCalcEs5.prototype.dif = function() {
  return Math.pow(Сalculator.prototype.dif.apply(this, arguments), 2);
};
SqlCalcEs5.prototype.div = function() {
  return Math.pow(Сalculator.prototype.div.apply(this, arguments), 2);
};
SqlCalcEs5.prototype.mul = function() {
  return Math.pow(Сalculator.prototype.mul.apply(this, arguments), 2);
};

module.exports = SqlCalcEs5;
