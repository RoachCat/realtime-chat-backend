const Store = require("./store");
const BuildHistoryLog = require("./historyLog");

function getRoomHistory(params) {
    try {
        const roomHistory = Store.getRoomHistory(params);
        return roomHistory;
    } catch (error) {
        throw new Error(error);
    }
};

function updateRoomHistory(params, body) {
    try {
        const historyLog = BuildHistoryLog(body);
        const response = Store.updateRoomHistory(params, historyLog);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getRoomHistory,
    updateRoomHistory
}

