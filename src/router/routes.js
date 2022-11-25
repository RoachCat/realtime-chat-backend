const user = require('../components/user/network');
const room = require('../components/room/network');
const roomHistory = require('../components/roomHistory/network');

const routes = (server) => {
    server.use("/user", user);
    server.use("/room", room);
    server.use("/room-history", roomHistory);
}

module.exports = routes;