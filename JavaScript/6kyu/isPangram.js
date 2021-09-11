// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// My code
function isPangram(string){
  for (let i = 97; i <= 122; i++){
    const char = String.fromCharCode(i);
    if (string.toLowerCase().indexOf(char) === -1) return false;
  }
  return true;
}

// Best code
// function isPangram(string){
//   return 'abcdefghijklmnopqrstuvwxyz'
//     .split('')
//     .every((x) => string.toLowerCase().includes(x));
// }