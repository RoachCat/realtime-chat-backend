const GenerateGUID = require("../../utils/generateGUID");

function buldHistoryLog(data) {
    const historyLog = {
        ...(data.username && { username: data.username }),
        type: data.type,
        message: data.message,
        user_id: data.user_id,
        date: data.date,
        log_id: GenerateGUID()
    }
    return historyLog;
}

module.exports = buldHistoryLog;