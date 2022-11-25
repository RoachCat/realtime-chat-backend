const Model = require("./model");

async function getRoomHistory(params) {
    return Model.findById(params.room_id);
}

async function updateRoomHistory(params, history) {
    const roomHistory = await getRoomHistory(params);
    const payload = {
        history: [...roomHistory.history, history]
    }
    return Model.findByIdAndUpdate(params.room_id, payload);
}

module.exports = {
    getRoomHistory,
    updateRoomHistory
}