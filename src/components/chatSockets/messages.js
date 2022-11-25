const RoomHistoryController = require("../roomHistory/controller");

function getMessageFromClient(io, socket) {
    socket.on("send-message", (data) => {
        const payload = {
            ...data,
            date: new Date()
        }
        RoomHistoryController.updateRoomHistory({ room_id: data.room_id }, { ...payload, type: "MESSAGE" });
        emitMessage(io, data, payload);
    });
}

function emitMessage(io, data, payload) {
    io.in(data.room_id).emit("get-message", payload);
}

module.exports = {
    getMessageFromClient
}

