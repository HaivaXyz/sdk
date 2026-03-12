const express = require("express")
const router = express.Router()

const controller = require("../controllers/agentController")

router.post("/create", controller.createAgent)
router.get("/", controller.getAgents)

module.exports = router
