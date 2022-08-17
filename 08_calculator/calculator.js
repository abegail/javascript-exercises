const add = function(a, b) {
  return a + b;
};

const subtract = function(a ,b) {
	return a - b;
};

const sum = function(array) {
	const total = array.reduce((runningTotal, number) => runningTotal + number, 0);
  return total;
};

const multiply = function(array) {
  const product = array.reduce((runningProduct, number) => runningProduct * number);
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0) return 1;
  return multiply(listNums(n));
};

function listNums(n) {
  const numArray = [];
  for (i = n; n > 0; n--) {
    numArray.push(n);
  }
  return numArray;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
