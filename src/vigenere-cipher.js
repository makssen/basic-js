const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    direct;
    constructor(props) {
        if (props === false) this.direct = false;
        else this.direct = true;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let res = '';
        let count = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            let code = message.codePointAt(i);
            if (code >= 65 && code <= 90) {
                code = (message.codePointAt(i) + key.codePointAt(count % key.length) - 130) % 26 + 65;
                res += String.fromCodePoint(code);
                count++;
            } else {
                res += String.fromCodePoint(code);
            }

        }
        if (this.direct) return res;
        else return res.split('').reverse().join('');

    }
    decrypt(message, key) {
        if (!message || !key) throw new Error('Error');
        let res = '';
        let count = 0;
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            let code = message.codePointAt(i);
            if (code >= 65 && code <= 90) {
                code = (message.codePointAt(i) + 26 - key.codePointAt(count % key.length)) % 26 + 65;
                res += String.fromCodePoint(code);
                count++;
            } else {
                res += String.fromCodePoint(code);
            }

        }
        if (this.direct) return res;
        else return res.split('').reverse().join('');

    }
}

module.exports = VigenereCipheringMachine;