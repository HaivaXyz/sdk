const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const agentRoutes = require("./routes/agentRoutes")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use("/api/agents", agentRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`HAIVA server running on port ${PORT}`)
})
