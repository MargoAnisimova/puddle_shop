const Router = require("express")
const { create, getAll, getOne } = require("../controllers/publicationController")
const router = new Router()

router.post("/",create)//checkRole("ADMIN")
router.get("/",getAll)
router.get("/:id",getOne)
router.delete("/:id")
router.put("/:id")

module.exports = router
