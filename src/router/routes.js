const user = require('../components/user/network');

const routes = (server) => {
    server.use("/user", user)
}

module.exports = routes;