"Consonant Please"
https://www.codewars.com/kata/59727e04f6a02d0cde00001a/train/javascript

// My code
function sortLetters(arr) {
  const vowel = ['A', 'E', 'I', 'O', 'U']
  const letterArray = ([].concat(...arr)).filter(x => typeof x === 'string')
  let x = [], y = []
  for (let i of letterArray){
    const p = (vowel.includes(i.toUpperCase())) ? x.push(i.toUpperCase()) : y.push(i.toUpperCase())
  }
  return [x, y]
}

// Best code
// function sortLetters(arr) {
//   var letters = [].concat(...arr).filter(c=>/[a-z]/i.test(c)).map(c=>c.toUpperCase());
//   return [letters.filter(c=>/[AEIOU]/.test(c)),letters.filter(c=>/[^AEIOU]/.test(c))];
// }