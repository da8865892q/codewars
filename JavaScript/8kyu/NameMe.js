// "this" is a problem
// https://www.codewars.com/kata/547c71fdc5b2b38db1000098

// My code
function NameMe(first, last) {
  return {
    firstName: first,
    lastName: last,
    name: `${first} ${last}`
  }
}

// Best code
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName  = last;
//     this.name = first + ' ' + last;
// }