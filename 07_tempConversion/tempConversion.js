const ftoc = function(fahrenheit) {
  const celsius = Math.round(((fahrenheit - 32) * (5/9)) * 10) / 10;
  return celsius;
};

const ctof = function(celsius) {
  const fahrenheit = Math.round((celsius * 1.8 + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
