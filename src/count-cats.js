const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arr = matrix;
    let count = 0;
    for (let item of arr) {
        for (let cat of item) {
            if (cat === '^^') {
                count++;
            }
        }
    }
    return count;
};