const mongoose = require("mongoose")
const Schema = mongoose.Schema
const historyLogSchema = new Schema({
    room_name: {
        type: String,
        required: true
    },
    history: {
        type: Array,
        required: true
    }
    // type: {
    //     type: String,
    //     required: true,
    // },
    // username: {
    //     type: String,
    //     required: true
    // },
    // message: {
    //     type: String,
    //     required: true
    // },
    // user_id: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: String,
    //     required: true
    // },
    // log_id: {
    //     type: String,
    //     required: true
    // },
})
const model = mongoose.model('histories', historyLogSchema)
module.exports = model
