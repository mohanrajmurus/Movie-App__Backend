const { registerUser, loginUser,findUser,resetPassword } = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.post("/", registerUser)
router.post("/login", loginUser)
router.get('/:id', findUser)
router.put('/:id',resetPassword)

module.exports = router
