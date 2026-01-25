/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function(nums) {
    let count = 1;
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            count++;
        } else {
            break;
        }
    }

    return nums.length - count;
};