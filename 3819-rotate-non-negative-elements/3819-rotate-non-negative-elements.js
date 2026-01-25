var rotateElements = function(nums, k) {
  const elements = nums.filter((num) => num >= 0);
  const length = elements.length;
    
  if (length === 0) {
      return nums;
  }

  const rotation = k % length;
  let idx = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] >= 0) {
      nums[j] = elements[(idx + rotation) % length];
      idx++;
    }
  }

  return nums;
};