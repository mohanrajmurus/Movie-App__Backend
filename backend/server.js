const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const cors = require("cors")
const router = require("./routes/movieRoutes")
dotenv.config()
const { URI, PORT } = process.env
connectDB(URI)
const app = express()
app.use(express.json({ limit: "50mb" }))
app.use(cors())

app.use("/", router)
app.listen(PORT, (err) => {
  if (err) console.error(err)
  else console.log(`Server Listening on PORT:${PORT}`)
})
