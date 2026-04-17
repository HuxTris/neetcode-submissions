class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let result = 0;

        for ( const num of nums ) {
            if (!numSet.has(num - 1)) {
                let length = 1;
                let current = num;

                while (numSet.has(current + 1)) {
                    current++;
                    length++;
                }
                result = Math.max(result, length);
            }
        }
        return result;
    }
}
