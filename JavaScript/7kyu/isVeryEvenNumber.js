// "Very Even" Numbers.
// https://www.codewars.com/kata/58c9322bedb4235468000019

// My code
function isVeryEvenNumber(n) {
  let sum = n;
  while (sum >= 10){
    arr = sum.toString().split('')
    sum = arr.reduce((sum, x) => parseInt(sum) + parseInt(x))
  }
  return sum % 2 == 0;
}

// Best code
// function isVeryEvenNumber(n) {
//   if (n < 10 && n%2 === 0) return true
//   if (n > 9) {
//     return isVeryEvenNumber(String(n).split('').reduce((a,b) => +a + +b))
//   }
//   return false
// }