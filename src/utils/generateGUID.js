const Crypto = require("crypto");

function generateGUID() {
    return Crypto.randomBytes(16).toString("hex");
}

module.exports = generateGUID;