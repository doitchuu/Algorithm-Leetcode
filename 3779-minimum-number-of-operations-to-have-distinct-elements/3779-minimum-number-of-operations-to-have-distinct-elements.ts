function minOperations(nums: number[]): number {
    const set = new Set();
    let count = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        const number = nums[i];

        if (set.has(number)) {
            count = Math.ceil((i + 1) / 3);
            break;
        }

        set.add(number);
    }

    return count;
};