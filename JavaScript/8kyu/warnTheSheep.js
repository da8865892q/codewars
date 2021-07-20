// A wolf in sheep's clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// My code
function warnTheSheep(queue) {
  const wolf = queue.indexOf('wolf') + 1
  const len = queue.length
  return (wolf === len) ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${len - wolf}! You are about to be eaten by a wolf!`
}

// Best code
// function warnTheSheep(queue) {
//   const position = queue.reverse().indexOf('wolf');
//   return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }