const router = require('express').Router() //eslint-disable-line new-cap
const userRoutes = require('./users')
const contactRoutes = require('./contacts')
router.use('/users', userRoutes)
router.use('/contacts', contactRoutes)

module.exports = router
