const express = require("express")
const router = express.Router()

const schemeController = require("../controllers/schemeController")

router.get("/",schemeController.showSchemesPage)

router.post("/check",schemeController.getSchemeDetails)

module.exports = router