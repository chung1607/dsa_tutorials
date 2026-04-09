/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    if (num % 3 !== 0 ) {
        return [];
    }
    const x = (num - 3) / 3;
    return [x, x + 1, x + 2];
};