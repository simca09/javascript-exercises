const ftoc = function(x) {
return Math.round((x - 32) * (5/9) * 10) / 10;
};

const ctof = function(y) {
return Math.round(((y * 9/5) + 32) *10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};


ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);