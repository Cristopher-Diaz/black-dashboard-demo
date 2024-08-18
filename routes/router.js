const express = require('express')
const {
  mainView,
  iconsView,
  mapsView,
  notificationsView,
  userView,
  tablesView,
  typographyView,
  rtlView
} = require('../controllers/PageController')
console.log(mainView)

const router = express.Router()

router.get('/', mainView)
router.get('/icons', iconsView)
router.get('/maps', mapsView)
router.get('/notifications', notificationsView)
router.get('/user', userView)
router.get('/tables', tablesView)
router.get('/typography', typographyView)
router.get('/rtl', rtlView)

module.exports = { routes: router }