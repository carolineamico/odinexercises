const ftoc = function(ftemp) {
let ctemp;
ctemp = (ftemp - 32) / 1.8;
let cRounded = Math.round(ctemp * 10) / 10;
return cRounded;
}

const ctof = function(ctemp) {
 let ftemp;
 ftemp = (ctemp * 1.8) + 32;
 let fRounded = Math.round(ftemp * 10) / 10;
 return fRounded;
}

module.exports = {
  ftoc,
  ctof
}
