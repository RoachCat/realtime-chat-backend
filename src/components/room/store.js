const Model = require("./model");

function getRooms() {
    return Model.find({});
}

module.exports = {
    getRooms
}