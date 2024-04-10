/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let nextNonZeroPosition = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nextNonZeroPosition] = nums[i];
      if (i !== nextNonZeroPosition) {
        nums[i] = 0;
      }
      
      nextNonZeroPosition++;
    }
  }
}