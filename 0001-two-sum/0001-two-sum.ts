function twoSum(nums: number[], target: number): number[] {
    const cache: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in cache) return [cache[diff], i]
        cache[nums[i]] = i
    }
    return []
}
