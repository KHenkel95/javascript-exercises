const convertToCelsius = function(tempToConvert) {
  tempToConvert = (tempToConvert - 32) / 1.8;
  return Math.round(tempToConvert * 10) / 10;
};

const convertToFahrenheit = function(tempToConvert) {
  tempToConvert = tempToConvert * 1.8 + 32;
  return Math.round(tempToConvert * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
