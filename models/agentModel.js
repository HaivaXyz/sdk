const { v4: uuidv4 } = require("uuid")

let agents = []

function createAgent(name, description) {
  const agent = {
    id: uuidv4(),
    name,
    description,
    createdAt: new Date()
  }

  agents.push(agent)
  return agent
}

function getAgents() {
  return agents
}

module.exports = {
  createAgent,
  getAgents
}
