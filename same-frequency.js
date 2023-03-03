function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }

  let n1Count = {};
  let n2Count = {};

  let str1 = num1.toString();
  let str2 = num2.toString();

  for (let i = 0; i < str1.length; i++) {
    n1Count[str1[i]] = (n1Count[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    n2Count[str2[j]] = (n2Count[str2[j]] || 0) + 1;
  }

  for (let idx in n1Count) {
    if (n1Count[idx] !== n2Count[idx]) return false;
  }

  return true;
}

console.log(sameFrequency(123, 321));
