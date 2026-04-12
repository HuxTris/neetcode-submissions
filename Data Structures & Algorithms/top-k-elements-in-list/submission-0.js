class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqmap = new Map();

        for ( const i of nums ) {
            freqmap.set(i, (freqmap.get(i) || 0 ) + 1);
        }

        const sorted = Array.from(freqmap.entries()).sort((a,b) => (b[1]-a[1]));

        return sorted.slice(0,k).map((kq) => kq[0]);
    }
}
