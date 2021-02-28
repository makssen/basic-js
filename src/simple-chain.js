const CustomError = require("../extensions/custom-error");

const chainMaker = {
    res: [],
    getLength() {
        return this.res.length;
    },
    addLink(value) {
        this.res.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (typeof(position) == 'number' && position > 0 && position < this.res.length) {
            this.res.splice(position - 1, 1);
            return this;
        } else {
            this.res = [];
            throw new Error();
        }
    },
    reverseChain() {
        this.res.reverse();
        return this;
    },
    finishChain() {
        let resString = this.res.join("~~");
        this.res = [];
        return resString;
    }
};

module.exports = chainMaker;