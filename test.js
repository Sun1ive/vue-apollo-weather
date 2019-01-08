const arr = [3, 1, 2, 8, 5, 4, 9, 7, 6, 10];
const quickSort = arr => {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  pivot;

  let left = [];
  let equal = [];
  let right = [];

  for (let element of arr) {
    if (element > pivot) {
      right.push(element);
    } else if (element < pivot) {
      left.push(element);
    } else {
      equal.push(element);
    }
  }

  left;
  right;
  equal;

  return quickSort(left)
    .concat(equal)
    .concat(quickSort(right));
};

console.log(quickSort([2, 1]));
