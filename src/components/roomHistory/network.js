const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../responses/responses");

router.get("/", async (req, res) => {
    try {
        const user = controller.getRoomHistory(req.query);
        return response.success(req, res, user, 201)
    } catch (error) {
        return response.error(req, res, "Error", 500, error)
    }
});

router.patch("/", async (req, res) => {
    try {
        const user = controller.updateRoomHistory();
        return response.success(req, res, user, 201)
    } catch (error) {
        return response.error(req, res, "Error", 500, error)
    }
})

module.exports = router;