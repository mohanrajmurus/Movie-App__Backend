const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const auth = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1]

      const decode = jwt.verify(token, process.env.JWT__SECRET)
      const { email } = decode
      req.user = await User.findOne({ email })

      next()
    }
  } catch (error) {
    return res.status(400).send("Unauthorized")
  }
}

module.exports = auth
