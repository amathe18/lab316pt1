let numbers = [2, 4, 6, 8, 10];

function sumArray(array) {

  if (array.length === 0) return 0;
  
  return array[0] + sumArray(array.slice(1));
}
console.log(sumArray(numbers)); 
    return sumArray




