class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = Array.from( {length : 9} , () => new Set());
        const cols = Array.from( {length : 9} , () => new Set());
        const boxs = Array.from( {length : 9} , () => new Set());

        for ( let r = 0 ; r < 9 ; r++ ) {
            for ( let c = 0 ; c < 9 ; c++) {
                let value = board[r][c];
                
                if (value === '.') continue;

                const boxsIndex= Math.floor(r/3) * 3 + Math.floor(c/3);

                if (rows[r].has(value) ||
                    cols[c].has(value) ||
                    boxs[boxsIndex].has(value)
                )
                return false;

            rows[r].add(value);
            cols[c].add(value);
            boxs[boxsIndex].add(value);




            }
        }
        return true;
    }
}
