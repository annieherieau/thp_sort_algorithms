let count = 0;
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {  
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }  
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// let numbersArray = [64, 34, 25, 12, 22, 11, 90];
// console.log(quickSort(numbersArray)); // [11, 12, 22, 25, 34, 64, 90]
// console.log(count);

let numbersArray = [ 48, -2, 6, 12, 0, -4 ];
console.log(quickSort(numbersArray)); // [ -4, -2, 0, 6, 12, 48 ]
console.log(count);

numbersArray = [
  -714, -321, -133, -42,
    42,   42,  246, 651,
  1506, 2339, 8763
];
console.log(quickSort(numbersArray)); // [-714,-321,-133,-42,42,42,246,651,1506,2339,8763]
console.log(count);

numbersArray = [
  -714, -321, -133
];
console.log(quickSort(numbersArray)); // [-714,-321,-133,-42,42,42,246,651,1506,2339,8763]
console.log(count);