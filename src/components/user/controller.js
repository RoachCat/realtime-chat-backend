const GenerateGUID = require("../../utils/generateGUID")
const users = [];

function createNewUser(payload) {
    const response = {
        username: payload.username,
        user_id: GenerateGUID()
    }
    return response;
};

function addUser(user) {
    users.push(user);
    return user;
}

function getDisconnectedUser(socket_id) {
    return users.find((user) => user.socket_id === socket_id);
}

module.exports = {
    createNewUser,
    addUser,
    getDisconnectedUser
}

