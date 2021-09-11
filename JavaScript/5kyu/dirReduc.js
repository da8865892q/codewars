// Directions Reduction
// https://www.codewars.com/kata/550f22f4d758534c1100025a

// My code
function dirReduc(arr){
  function check(arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i]==='NORTH' && arr[i+1]==='SOUTH' ||
        arr[i]==='SOUTH' && arr[i+1]==='NORTH' ||
        arr[i]==='EAST' && arr[i+1]==='WEST' ||
        arr[i]==='WEST' && arr[i+1]==='EAST') {
        arr.splice(i, 2);
        return check(arr);
      }
    }
    return arr;
  }
  return check(arr);
}

// Best code
// function dirReduc(arr){
//   const dir = arr.join(' ');
//   const dir2 = dir.replace('NORTH SOUTH', '').replace('SOUTH NORTH','').replace('EAST WEST','').replace('WEST EAST','').replace('  ', ' ')
//   const dir3 = dir2.split(' ')
//   const dir4 = dir3.filter(item => item !== '');
//   return (dir4.length < arr.length) ? dirReduc(dir4) : dir4
// }