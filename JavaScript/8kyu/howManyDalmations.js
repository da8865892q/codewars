// 101 Dalmatians - squash the bugs, not the dogs!
// https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// My code
function howManyDalmatians(number){
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  return number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number <= 100 ? dogs[2] : dogs[3]))
}

// Best code
// howManyDalmatians = n => n <= 10 ? "Hardly any" : n <= 50 ? "More than a handful!" : n == 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!"