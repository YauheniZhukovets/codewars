function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sonX2 = sonYearsOld * 2;
if (sonX2>dadYearsOld) {
  return sonX2 - dadYearsOld
} else if (sonX2<=dadYearsOld) {
  return dadYearsOld-sonX2
}
}
  

var end =  twiceAsOld(55,30);
console.log(end);