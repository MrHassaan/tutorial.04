//home route module
const express = require("express")
const router = express.Router()
const home = require('../controllers/homecontroller.js')
router.get('/',home)

module.exports = router