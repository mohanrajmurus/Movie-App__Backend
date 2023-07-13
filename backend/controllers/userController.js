const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    return res.status(400).send("All inputs are required")
  }
  const existUser = await User.findOne({ email })
  if (existUser) {
    return res.status(401).send("User already exist.")
  }
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  })
  if (user) {
    return res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    })
  } else res.status(400).send("Invalid Parameters")
})
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).send("All inputs are required")
  }
  const user = await User.findOne({ email })
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      return res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateJWTToken(user.email),
        isAdmin: user.isAdmin,
      })
    } else {
      return res.status(400).send("Invalid Password")
    }
  } else {
    return res.status(400).send("User not registred with us")
  }
})

const findUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  const user = await User.findOne({ email: id })
  if (user) {
    return res.status(200).json({
      id: user._id,
    })
  } else
    return res
      .status(400)
      .send("Email not registred with us. Please Create Account")
})
const resetPassword = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { password } = req.body
  const hashPassword = await bcrypt.hash(password, 10)
  const user = await User.findByIdAndUpdate(id, { password: hashPassword })
  return res.status(200).send("password changed sucessfully")
})

const generateJWTToken = (email) => {
  return jwt.sign({ email }, process.env.JWT__SECRET, {
    expiresIn: "30d",
  })
}

module.exports = { registerUser, loginUser, findUser, resetPassword }
