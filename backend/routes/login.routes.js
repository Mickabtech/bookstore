const express = require('express')
const router = express.Router()


const {signin} = require('../controller/login.controller.routes.js')

router.post('/', signin)

module.exports = router