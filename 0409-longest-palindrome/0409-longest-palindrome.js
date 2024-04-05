/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const frequencyWords = {};
  
  for (const word of s) {
    frequencyWords[word] = (frequencyWords[word] || 0) + 1;
 }
  
  let palindromLength = 0;
  let hasOddFrequency = false;
  
  for (const word in frequencyWords) {
    let numberOfFrequencyWord = frequencyWords[word];
    
    if (numberOfFrequencyWord % 2 === 0) {
      palindromLength += numberOfFrequencyWord;
      
      continue;
    }
    
    palindromLength += numberOfFrequencyWord - 1;
    hasOddFrequency = true;
  }

  if (hasOddFrequency) {
    palindromLength += 1;
  }
  
  return palindromLength;
}