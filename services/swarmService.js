function connectToSwarm() {
  console.log("Connecting to HAIVA swarm network...")
}

function publishAgent(agent) {
  console.log("Agent published to swarm:", agent.name)
}

module.exports = {
  connectToSwarm,
  publishAgent
}
