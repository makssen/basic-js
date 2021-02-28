const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let team = [];

        members.forEach(i => {
            if (typeof i === 'string')
                team.push(i.trim()[0].toUpperCase())
        });

        return team.sort().join('');

    } else return false;
};