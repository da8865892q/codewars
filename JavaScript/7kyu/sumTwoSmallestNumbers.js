// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// My code
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => {return a - b});
  return numbers[0] + numbers[1]
}

// Best code
// function sumTwoSmallestNumbers(numbers) {  
//   var [ a, b ] = numbers.sort((a, b) => a - b)
//   return a + b
// }