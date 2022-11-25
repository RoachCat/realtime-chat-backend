const RoomsController = require("../room/controller");
let messagesHistory = [];

function getRoomHistory(params) {
    if (!messagesHistory.length) {
        messagesHistory = RoomsController.getRooms().map((room) => {
            return {
                room_id: room.room_id,
                room_name: room.room_name,
                history: [],
            };
        });
    }
    return messagesHistory.find((room) => room.room_id === params.room_id);
}

function updateRoomHistory(params, body) {
    if (!messagesHistory.length) {
        messagesHistory = RoomsController.getRooms().map((room) => {
            return {
                room_id: room.room_id,
                room_name: room.room_name,
                history: [],
            };
        });
    }
    const room = messagesHistory.find((room) => room.room_id === params.room_id);
    room.history.push(body);
    return room;
}

module.exports = {
    getRoomHistory,
    updateRoomHistory
}