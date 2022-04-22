const ftoc = function(farTemp) {
  let fconOne = farTemp - 32;
  let fconTwo = fconOne * .5556;

  // checks for decimal, if so rounds to one decimal.
  if (fconTwo % 1 != 0) {
      fconTwo = Math.round(fconTwo * 10) / 10
  }

  return fconTwo;


};

const ctof = function(celTemp) {
  let celCon = celTemp * 1.8;
  let celcon2 = celCon + 32;

  // checks for decimal, rounds.
  if (celcon2 % 1 != 0) {
      celcon2 = Math.round(celcon2 * 10) / 10
  }

  return celcon2;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
