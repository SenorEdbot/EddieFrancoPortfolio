const router = require('express').Router() //eslint-disable-lint new-cap
const ContactController = require('../../controllers/ContactController')

router.post('/contact', ContactController.contact)

module.exports = router
