const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const cors = require("cors")
dotenv.config()
const { URI, PORT } = process.env
connectDB(URI)
const app = express()
app.use(express.json({ limit: "50mb" }))
app.use(cors())

app.use("/", require('./routes/movieRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.listen((PORT|| 40001), (err) => {
  if (err) console.error(err)
  else console.log(`Server Listening on PORT:${PORT}`)
})
