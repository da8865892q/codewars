// #1 Matrices : Making an Alternating Sum
// https://www.codewars.com/kata/5720eb05e8d6c5b24a0014c5

// My code
function scoreMatrix(matrix) {
  let score = 0;
  for (let i = 0; i < matrix.length; i++){
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++){
      sum = (j % 2 === 0) ? sum + matrix[i][j] : sum - matrix[i][j];
    }
    score = (i % 2 === 0) ? score + sum : score - sum;
  }
  return score;
}

// Best code
// function scoreMatrix(matrix) {
//   let out = matrix.map((el, i) => i % 2 ? el.map(e => -e) : el);
//   out = out.map(el => el.map((e, i) => i % 2 ? -e : e));
//   return out.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b);
// }