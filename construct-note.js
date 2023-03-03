function constructNote(msg, chars) {
  let charFreq = {};
  let msgFreq = {};

  for (let char of chars) {
    charFreq[char] = ++charFreq[char] || 1;
  }

  for (let m of msg) {
    msgFreq[m] = ++msgFreq[m] || 1;
  }

  for (let char in msgFreq) {
    if (!charFreq[char]) {
      return false;
    }
    if (msgFreq[char] > charFreq[char]) {
      return false;
    }
  }
  return true;
}

console.log(constructNote("abc", "pwceiboar"));
