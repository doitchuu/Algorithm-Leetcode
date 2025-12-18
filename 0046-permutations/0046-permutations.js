/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    function dfs(current) {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (current.includes(nums[i])) {
                continue;
            }

            current.push(nums[i]);
            dfs(current);
            current.pop();
        }
    }

    dfs([]);
    return result;
};