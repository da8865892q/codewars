// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// My code
function pigIt(str){
  let s = '';
  for (let i of str.split(' ')){
    s += (/[a-z]/i.test(i)) ? `${i.slice(1, i.length)}${i.slice(0, 1)}ay ` : `${i} `
  }
  return s.slice(0, s.length - 1)
}

// Best code
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }