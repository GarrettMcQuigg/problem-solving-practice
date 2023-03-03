function isSubsequence(str1, str2) {
  let s1 = 0;
  let s2 = 0;

  while (s2 < str2.length) {
    if (str2[s2] === str1[s1]) {
      s1 += 1;
    }
    if (s1 === str1.length) return true;
    s2 += 1;
  }
  return false;
}

console.log(isSubsequence("sing", "sting"));
