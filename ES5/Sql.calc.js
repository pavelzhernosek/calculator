var Сalculator = require("./Calculator");

var SqlCalc = function(firstNumber) {
  Сalculator.apply(this, arguments);
};

SqlCalc.prototype = Object.create(Сalculator.prototype);

SqlCalc.prototype.sum = function() {
  return Math.pow(Сalculator.prototype.sum.apply(this, arguments), 2);
};
SqlCalc.prototype.dif = function() {
  return Math.pow(Сalculator.prototype.dif.apply(this, arguments), 2);
};
SqlCalc.prototype.div = function() {
  return Math.pow(Сalculator.prototype.div.apply(this, arguments), 2);
};
SqlCalc.prototype.mul = function() {
  return Math.pow(Сalculator.prototype.mul.apply(this, arguments), 2);
};

module.exports = SqlCalc;
