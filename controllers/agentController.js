const Agent = require("../models/agentModel")

exports.createAgent = (req, res) => {
  const { name, description } = req.body

  const agent = Agent.createAgent(name, description)

  res.json({
    success: true,
    agent
  })
}

exports.getAgents = (req, res) => {
  const agents = Agent.getAgents()

  res.json({
    success: true,
    agents
  })
}
