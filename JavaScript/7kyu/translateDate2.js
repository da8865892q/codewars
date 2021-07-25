// #~For Kids~# Date encryption.
// https://www.codewars.com/kata/58870b572640aeb910000098

// My code
function translateDate(dateStr){
  function ascii (num){
    return String.fromCharCode(parseInt(num)+50)
  }
  const arr = dateStr.split('-')
  return `${ascii(Math.floor(arr[0]/100))}${ascii(arr[0]%100)}-${ascii(arr[1])}-${ascii(arr[2])}`
}

// Best code
// function translateDate(s) {
//   return s.replace(/\d\d/g, x => String.fromCharCode(+x + 50))
// }