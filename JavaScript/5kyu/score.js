// Greed is Good
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

// My code
function score(dice) {
  let sum = 0;
  for (let i = 1; i <= 6; i++) {
    const count = dice.filter(n => n === i).length;
    if (i === 1 || i === 5) {
      sum += (i === 1) ? Math.floor(count / 3) * 1000 + (count % 3 * 100) : Math.floor(count / 3) * 500 + (count % 3 * 50)
    } else {
      sum += Math.floor(count / 3) * i * 100
    }
  }
  return sum
}

// Best code
// function score( dice ) {
//   var dc = [0,0,0,0,0,0];
//   var tdr = [1000,200,300,400,500,600];
//   var sdr = [100,0,0,0,50,0];
//   dice.forEach(function(x){ dc[x-1]++; });
//   return dc.reduce(function(s,x,i){ 
//     return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
//   },0);
// }