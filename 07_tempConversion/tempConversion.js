const ftoc = function(temp) {
  let celcius;
  celcius = ((temp-32) * 5) / 9;
  return  Number(celcius.toFixed(1));
};

const ctof = function(temp) {
  let fahrenheit;
  fahrenheit = 1.8 * temp + 32;
  return  Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
