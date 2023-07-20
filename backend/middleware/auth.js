const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const auth = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1]

      const {id} = jwt.verify(token, process.env.JWT__SECRET)
      
      req.user = await User.findById(id)

      next()
    }
  } catch (error) {
    return res.status(400).send("Unauthorized")
  }
}

module.exports = auth
