const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let res = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                let add = 1;
                add += this.calculateDepth(arr[i]);
                if (add > res) res = add;
            }
        }
        return res;
    }
};