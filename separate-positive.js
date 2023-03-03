function separatePositive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
  return newArr;
}

console.log(separatePositive([6, -2, -5, 1, 3, 5, -9]));
