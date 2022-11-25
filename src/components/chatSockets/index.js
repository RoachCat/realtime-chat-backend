const socket = require("socket.io")
const { getMessageFromClient } = require("./messages");
const { joinToRoom, disconnectedFromRoom } = require("./rooms");
const usersConnectedInEachRoom = {};

function initChatSocket(server) {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
        }
    });
    io.on("connection", (socket) => {
        console.log(`Connection established with socket id ${socket.id}`);
        socket.on("join-room", (data) => {
            if (!checkIfUserIsConnectedInRoom(data.room_id, data.user_id)) {
                addUserInfoConnected(data);
                joinToRoom(io, socket, data);
            }
        })
        disconnectedFromRoom(socket);
        getMessageFromClient(io, socket);
    })
}

function checkIfUserIsConnectedInRoom(room_id, user_id) {
    const usersConnectedInRoom = usersConnectedInEachRoom[room_id];
    if (usersConnectedInRoom) {
        return usersConnectedInRoom.find((user) => user.user_id === user_id);
    }
    return false;
}

function addUserInfoConnected(data) {
    if (!usersConnectedInEachRoom[data.room_id]) {
        usersConnectedInEachRoom[data.room_id] = [];
    }
    usersConnectedInEachRoom[data.room_id].push({ username: data.username, user_id: data.user_id, socket_id: data.socket_id });
}

module.exports = {
    initChatSocket
}
