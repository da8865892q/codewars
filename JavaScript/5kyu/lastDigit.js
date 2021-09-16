// Last digit of a large number
// https://www.codewars.com/kata/5511b2f550906349a70004e1

// My code
var lastDigit = function(str1, str2){
  const base = Number(str1.charAt(str1.length - 1));
  if (str2 == 0) return 1;
  if ([0, 1, 5, 6].indexOf(base) !== -1) return base;
  if ([4, 9].indexOf(base) !== -1) {
    const check = Number(BigInt(str2) % 2n);
    return (check == 0) ? Math.pow(base, 2) % 10 : Math.pow(base, check) % 10;
  }
  if ([2, 3, 7, 8].indexOf(base) !== -1) {
    const check = Number(BigInt(str2) % 4n);
    return (check == 0) ? Math.pow(base, 4) % 10 : Math.pow(base, check) % 10;
  }
}

// Best code
// var lastDigit = function(str1, str2){
//   return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
// }