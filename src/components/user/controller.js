function createNewUser(payload) {
    const response = {
        username: payload.username,
        id: createGUID(),
    }
    return response;
};

function createGUID() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
        const r = Math.floor(Math.random() * 16);
        return r.toString(16);
    });
}

module.exports = {
    createNewUser
}

