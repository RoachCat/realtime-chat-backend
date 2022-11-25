const express = require('express');
const router = require('./src/router/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const URL = "192.168.194.67";
const PORT = process.env.PORT || 5000;
const db = require('./src/db/mongo');
db();
const { initChatSocket } = require("./src/components/chatSockets");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router(app);

const server = app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto: http://${URL}:${PORT}`);
})

initChatSocket(server);

