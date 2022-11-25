const Store = require("./store");
const BuildHistoryLog = require("./historyLog");

async function getRoomHistory(params) {
    try {
        const response = await Store.getRoomHistory(params);
        return response.history;
    } catch (error) {
        throw new Error(error);
    }
};

async function updateRoomHistory(params, body) {
    try {
        const historyLog = BuildHistoryLog(body);
        const response = await Store.updateRoomHistory(params, historyLog);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    getRoomHistory,
    updateRoomHistory
}

