/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    
    for (i = 0; i < s.length; i ++) {
       let current = map[s[i]];
       let next = map[s[i + 1]];
       if (next > current) {
            total -= current;
       }else {
            total += current;
       }
    }
    return total;
};
LVIII
`i = 0, current = 50, next = 5 => total = 50
i = 1, current = 5, next = 1 => total = 55
i = 2, current = 1, next = 1 => total = 56
i = 3, current = 1, next = 1 => total = 57
i = 4, current = 1, next = undefined => total = 58`

MCMXCIV
`
i = 0, current = 1000, next = 100 => total = 1000
i = 1, current = 100, next = 1000 => total = 900
i = 2, current = 1000, next = 10 => total = 1900
i = 3, current = 10, next = 100 => total = 1890
i = 4, current = 100, next = 1 => total = 1990
i = 5, current = 1, next = 5 => total = 1989
i = 6, current = 5, next = undefined => total = 1994
`


