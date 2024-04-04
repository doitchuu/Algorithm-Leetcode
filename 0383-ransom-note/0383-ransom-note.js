/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  let basicWord = ransomNote;
  let nextWord = magazine;
   
  for (let i = 0; i < basicWord.length; i++) {
    if (nextWord.includes(basicWord[i])) {
      nextWord = nextWord.replace(basicWord[i], "");
      continue;
    }
     
    return false;
  }

  return true;
}