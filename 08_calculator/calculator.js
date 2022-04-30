const add = function(a, b) {
	let res = a + b;
  return res;
};

const subtract = function(a, b) {
	let res = a - b;
  return res;
};

const sum = function(array) {
  return array.reduce(function (total, current) {
    return total + current;
  }, 0);
};

const multiply = function(array) {
  return array.reduce(function (total, current) {
    return total * current;
  }, 1);
};

const power = function(a, b) {
  let res = a ** b;
  return res;
};

const factorial = function(a) {
	if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
