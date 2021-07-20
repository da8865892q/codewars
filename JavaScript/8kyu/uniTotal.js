// ASCII Total
// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

// My code
function uniTotal(s) {
  let sum = 0
  for (i of s.split('')){
    sum += i.charCodeAt()
  }
  return sum
}

// Best code
// function uniTotal(str) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     count += str.charCodeAt(i);
//   }
//   return count;
// }