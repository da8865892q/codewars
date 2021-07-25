// #~For Kids~# Date decryption.
// https://www.codewars.com/kata/5887140d2640aea82f0000d3

// My code
function translateDate(dateStr){
  function ascii(str){
    return (str.charCodeAt()-50).toString().padStart(2, '0')
  }
  return `${ascii(dateStr[0])}${ascii(dateStr[1])}-${ascii(dateStr[3])}-${ascii(dateStr[5])}`
}

// Best code
// function translateDate(s) {
//   return s.replace(/[^-]/g, c => {
//     c = c.charCodeAt() - 50
//     return c >= 10 ? c : '0' + c
//   })
// }