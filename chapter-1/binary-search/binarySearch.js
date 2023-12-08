function binarySearch(list, item) {
  let low = 0;
  let high = list.length;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = list[middle];

    if (guess === item) {
      return middle;
    } else if (guess < item) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return false;
}

const list = [1, 3, 5, 7, 9, 10, 11, 12, 15, 17, 19, 21, 23, 25, 42];
console.log(binarySearch(list, 11)); // 3
