const express = require('express')
const router = express.Router()

const {signup} = require('../controller/user.controller.route.js')


router.post('/', signup),


module.exports = router