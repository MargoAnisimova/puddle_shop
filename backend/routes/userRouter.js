const Router = require("express")
const { registration, login, auth } = require("../controllers/userController")
const router = new Router()

router.post("/registration", registration)
router.post("/login", login)
router.get("/auth", auth)

module.exports = router