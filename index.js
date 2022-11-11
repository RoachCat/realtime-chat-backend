const express = require('express');
const socket = require("socket.io")
const router = require('./src/router/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const URL = "192.168.194.67";
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://${URL}:${PORT}`);
})

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on("connection", (socket) => {
    console.log(`Connection established with socket id ${socket.id}`);
    socket.on("join-room", (data) => {
        joinToRoom(socket, data);
    })
    socket.on("send-message", (data) => {
        io.in(data.room).emit("get-message", data);
    });
})

function joinToRoom(socket, data) {
    socket.join(data.room);
    socket.timeout(5000).emit("joined-to-room", { message: "Joined to room", ...data });
}
