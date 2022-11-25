const store = require("./store");

async function getRooms(payload) {
    try {
        const response = await store.getRooms();
        const rooms = response.map((room) => {
            return {
                room_name: room.room_name,
                room_id: room._id,
            };
        });
        return rooms;

    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    getRooms
}

