// O(n^2)
function bubbleSort(arr) {
  let count = 0;
  const n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  console.log(count);
  return arr;
}

const numbersArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbersArray); // [11, 12, 22, 25, 34, 64, 90]

numbersArray = [ 48, -2, 6, 12, 0, -4 ];
bubbleSort(numbersArray); // [ -4, -2, 0, 6, 12, 48 ]


numbersArray = [
  -714, -321, -133, -42,
    42,   42,  246, 651,
  1506, 2339, 8763
];
bubbleSort(numbersArray); // [-714,-321,-133,-42,42,42,246,651,1506,2339,8763]