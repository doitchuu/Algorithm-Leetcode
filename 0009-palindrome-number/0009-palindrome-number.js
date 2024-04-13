/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  
  const numberToString = x.toString();
  
  for (let i = 0; i < numberToString.length; i++) {
    if (numberToString[i] === numberToString[numberToString.length - 1 - i]) {
      continue;
    }
    
    return false;
  }
  
  return true;
};