const mongoose = require("mongoose")
const Schema = mongoose.Schema
const room = new Schema({
    room_name: {
        type: String,
        required: true,
    },
})
const model = mongoose.model('rooms', room);
module.exports = model;
