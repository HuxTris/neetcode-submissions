class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) 
        return false;

        const arrS = {};
        const arrT = {};
        for ( let i = 0 ; i < s.length; i++ ) {
            arrS[s[i]] = (arrS[s[i]] || 0) + 1;
            arrT[t[i]] = (arrT[t[i]] || 0) + 1;
        }

        for ( const key in arrS) {
            if (arrS[key] !== arrT[key]) {
                return false;
            }
        }
    return true;
    }
}
