class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const arr = new Set();
      for ( const i of nums ) {
        if (arr.has(i)) {
            return true;
        }
        arr.add(i);
      }
    return false;
    }
}
