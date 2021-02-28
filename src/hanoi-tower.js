const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let res = {
        turns: 0,
        seconds: 0
    };
    res.turns = Math.pow(2, disksNumber) - 1;
    res.seconds = Math.floor((3600 / turnsSpeed) * res.turns);
    return res;
};