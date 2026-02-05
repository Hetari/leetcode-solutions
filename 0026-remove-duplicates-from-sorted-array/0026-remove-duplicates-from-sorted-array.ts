function removeDuplicates(nums: number[]): number {
    const temp: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (temp[n] !== undefined) {
            nums.splice(i, 1);
            i = i - 1
        }
        else {
            temp[n] = i
        }
    }
    return nums.length
};