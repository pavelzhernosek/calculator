"use strict";

var Сalculator = function(firstNumber) {
  this.firstNumber = firstNumber;
};

function checker(item) {
  if (typeof item !== "number") {
    throw new Error("Error! The transferred parameter has to be number");
  }
}

Сalculator.prototype.sum = function(firstNumber) {
  var arr = Array.prototype.slice.call(arguments);
  return (
    this.firstNumber +
    arr.reduce(function(total, number) {
      checker(number);
      return total + number;
    }, 0)
  );
};

Сalculator.prototype.dif = function(firstNumber) {
  var arr = Array.prototype.slice.call(arguments);
  return (
    this.firstNumber -
    arr.reduce(function(total, number) {
      checker(number);
      return total + number;
    }, 0)
  );
};

Сalculator.prototype.div = function(firstNumber) {
  var arr = Array.prototype.slice.call(arguments);
  return arr.reduce(function(total, number) {
    checker(number);
    if (number === 0) {
      throw new Error("Error! Division by zero!");
    }
    return Math.round((total / number) * 100) / 100;
  }, this.firstNumber);
};

Сalculator.prototype.mul = function(firstNumber) {
  var arr = Array.prototype.slice.call(arguments);
  return arr.reduce(function(total, number) {
    checker(number);
    return total * number;
  }, this.firstNumber);
};

module.exports = Сalculator;
