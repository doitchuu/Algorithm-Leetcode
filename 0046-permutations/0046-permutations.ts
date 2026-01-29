function permute(nums: number[]): number[][] {
    const isVisited = new Array(nums.length).fill(false);
    const result = [];

    function dfs(arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (isVisited[i]) continue;
            
            isVisited[i] = true;
            arr.push(nums[i]);

            dfs(arr);

            arr.pop();
            isVisited[i] = false;
        }
    }

    dfs([]);

    return result;
};