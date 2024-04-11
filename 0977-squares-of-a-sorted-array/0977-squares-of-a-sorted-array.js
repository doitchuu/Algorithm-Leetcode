/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  const squaredNumberList = [];
  
  for (let i = 0; i < nums.length; i++) {
    const squaredNumber = Math.abs(nums[i] ** 2);
    
    squaredNumberList.push(squaredNumber);
  }
  
  squaredNumberList.sort((a, b) => a - b);
  
  return squaredNumberList;
};