const RoomHistoryController = require("../roomHistory/controller");
const UserController = require("../user/controller");

function joinToRoom(io, socket, data) {
    socket.join(data.room_id);
    const historyPayload = {
        ...data,
        type: "JOIN",
        message: `${data.username} has joined the room`,
        date: new Date(),
        socket_id: socket.id,
    }
    UserController.addUser(historyPayload);
    RoomHistoryController.updateRoomHistory({ room_id: data.room_id }, historyPayload);
    socket.to(data.room_id).emit("get-message", { message: "Joined to room", ...data, type: "JOIN" });
}

function disconnectedFromRoom(socket) {
    socket.on("disconnecting", () => {
        const disconnectedUser = UserController.getDisconnectedUser(socket.id);
    });
}

module.exports = {
    joinToRoom,
    disconnectedFromRoom
}