// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// https://www.codewars.com/kata/562e98755e9214cd2500003d

// My code
function yourFutureCareer(){
  var career = Math.random()
  return (career > 0.65) ? 'Full-Stack Developer' : (career <= 0.32) ? 'FrontEnd Developer' : 'BackEnd Developer'
}

// Best code
// const yourFutureCareer = () => {
//   let career = Math.random();
//   return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
// }