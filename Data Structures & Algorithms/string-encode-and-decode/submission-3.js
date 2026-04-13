class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        if (strs.length === 0) {
            return "";
        }

        for ( let str of strs ) {
            res += str.length + '#' + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res=[];
        if (str.length === 0 ){
            return [];
        }

        let i = 0;
        while ( i <str.length ) {
            let pos = str.indexOf('#' , i);
            let length = Number(str.slice(i,pos));
            const s = str.slice( pos + 1, pos + 1 + length);
            res.push(s);
            i = pos + 1 + length;
        }
        return res;
    }
}
