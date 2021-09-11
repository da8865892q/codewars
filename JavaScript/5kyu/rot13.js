// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716

// My code
function rot13(message){
  let result = ""
  for (let i in message) {
    if (/[a-mA-M]/.test(message[i])) result += String.fromCharCode(message.charCodeAt(i)+13);
    if (/[n-zN-Z]/.test(message[i])) result += String.fromCharCode(message.charCodeAt(i)-13);
    if (!/[a-zA-Z]/.test(message[i])) result += message[i];
  }
  return result
}

// Best code
// function rot13(message){
//   return message.replace(/[a-zA-Z]/g, function(match) {
//     return String.fromCharCode(match.charCodeAt(0) + (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13));
//   });
// }