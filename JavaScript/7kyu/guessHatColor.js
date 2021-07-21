// Simple Fun #195: Guess Hat Color
// https://www.codewars.com/kata/58c21c4ff130b7cab400009e

// My code
function guessHatColor(a,b,c,d) {
  return (b === c) ? 1 : 2
}

// Best code
// const guessHatColor = (a,b,c,d) => 2 - (b == c)