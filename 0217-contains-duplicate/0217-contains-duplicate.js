/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const sortedNumber = nums.slice().sort((a,b) => a - b);
  let basicWord = sortedNumber[0];
  
  for (let i = 1; i < sortedNumber.length; i++) {   
    if (basicWord === sortedNumber[i]) {
      return true;
    }
    
    basicWord = sortedNumber[i];
  }
  
  return false;
};