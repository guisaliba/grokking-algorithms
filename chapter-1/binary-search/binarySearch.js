function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = list[middle];

    if (guess == item) {
      return middle;
    } else if (guess < item) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
}

const list = [1, 3, 5, 7, 9];
binarySearch(list, 3); // 1
