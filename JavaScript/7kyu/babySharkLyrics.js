// Baby shark lyrics generator
// https://www.codewars.com/kata/5d076515e102162ac0dc514e

// My code
function babySharkLyrics(){
  const member = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"]
  let str =''
  for (i of member){
    str += `${i},${' doo'.repeat(6)}\n`.repeat(3)
    str += `${i}!\n`
  }
  return str += 'Run away,…'
}

// Best code
// function babySharkLyrics(){
//   names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
//   return names.map((name)=> `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
// }