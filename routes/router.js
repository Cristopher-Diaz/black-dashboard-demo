const express = require('express')
const mainView = require('../controllers/PageController')
console.log(mainView)

const router = express.Router()

router.get('/', mainView)

module.exports = { routes: router }