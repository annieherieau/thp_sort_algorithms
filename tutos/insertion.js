function insertSort(arr) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
      count += 1;
    }
    arr[j + 1] = currentValue;
    count += 1;
  }

  console.log(count);
  return arr;
}

const numbersArray = [ 48, -2, 6, 12, 0, -4 ];
insertSort(numbersArray); // [11, 12, 22, 25, 34, 64, 90]

numbersArray = [ 48, -2, 6, 12, 0, -4 ];
insertSort(numbersArray); // [ -4, -2, 0, 6, 12, 48 ]


numbersArray = [
  -714, -321, -133, -42,
    42,   42,  246, 651,
  1506, 2339, 8763
];
insertSort(numbersArray); // [-714,-321,-133,-42,42,42,246,651,1506,2339,8763]
