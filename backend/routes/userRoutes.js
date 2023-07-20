const { registerUser, loginUser,findUser,resetPassword, findUserByEmail, findUserById, getAllUsers } = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.post("/", registerUser)
router.get('/',getAllUsers)
router.post("/login", loginUser)
router.get('/:id', findUserByEmail)
router.put('/:id',resetPassword)

module.exports = router
