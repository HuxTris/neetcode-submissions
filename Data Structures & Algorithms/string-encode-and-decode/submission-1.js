class Solution {
    encode(strs) {
        let encoded = ""

        for (let i = 0; i < strs.length; i++) {

            const current = strs[i]

            encoded += `${current.length}#${current}`

        }
        
        return encoded
    }

    decode(str) {
        let decoded = []

        let i = 0

        while (i < str.length) {
            let delimiterIdx = i
                while (str[delimiterIdx] !== '#') delimiterIdx++

                const num = parseInt(str.substring(i, delimiterIdx))

                let newStr = ''
                for (let j = delimiterIdx + 1; j <  delimiterIdx + 1 +num; j++) {
                    newStr += str[j]
                }

                decoded.push(newStr)

            i = delimiterIdx + 1 + num
        }

        return decoded
    }
}