const db = require("mongoose");
db.Promise = global.Promise

const DB_USER = "roachcat";
const DB_PASSWORD = "H6lqBF4MjipiBB7S";
const DB_HOST = "cluster0.xs4npni.mongodb.net";
const DB_NAME = "realtime-chat-history";
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

async function connect() {
    await db.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('[db] Connected successfully'))
}

module.exports = connect