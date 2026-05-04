class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !this.isAlphaChar(s[left])) 
                left ++;
            while (right > left && !this.isAlphaChar(s[right])) 
                right --;
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;            
        }
        return true;
    }

        isAlphaChar(ch) {
            return (
                (ch >='a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9')
            );
        }
}
