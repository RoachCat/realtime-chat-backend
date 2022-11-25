function getRooms(payload) {
    const response = [
        { room_name: "General", room_id: "1" },
        { room_name: "Random", room_id: "2" },
        { room_name: "Dev", room_id: "3" },
        { room_name: "Test", room_id: "4" },
    ];
    return response;
};

module.exports = {
    getRooms
}

