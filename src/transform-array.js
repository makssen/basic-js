const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let found = false;
    if (arr.length == 0) return [];
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") {
            i++;
            found = true
        } else if (arr[i] == "--discard-prev") {
            if (i != 0 && arr[i - 2] != '--discard-next') res.pop();
            found = true
        } else if (arr[i] == "--double-next") {
            if (i < arr.length - 1) {
                res.push(arr[i + 1]);
            }
            found = true
        } else if (arr[i] == "--double-prev") {
            if (i != 0 && arr[i - 2] != '--discard-next') {
                res.push(arr[i - 1]);
            }
            found = true
        } else {
            res.push(arr[i]);
        }
    }
    if (found) return res;
    else return arr;
}