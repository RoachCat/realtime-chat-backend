const express = require('express');
const socket = require("socket.io")
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const io = socket(server, {
    cors: {
        origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"],
        methods: ["GET", "POST"]
    }
})
// const WebSocketServer = require("websocket").server;

// const wsServer = new WebSocketServer({
//     httpServer: server,
//     autoAcceptConnections: false
// });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
    console.log(`Socket connection made ${socket.id}`);
    socket.on("chat", function (data) {
        console.log(data);
        console.log(`Received: ${data.message} `)
        if (data.typing === false) {
            io.sockets.emit("chat", data);
        }
    });
})


// wsServer.on("request", (request) => {
//     console.log(`Te conectaste ${request.origin}`);
//     const connection = request.accept(null, request.origin);
//     connection.on("message", (message) => {
//         console.log("Mensaje recibido: " + message.utf8Data);
//         connection.sendUTF(message.utf8Data);
//     });
//     connection.on("close", (reasonCode, description) => {
//         console.log("El cliente se desconecto");
//     });
// });

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto: http://localhost:3000');
})
