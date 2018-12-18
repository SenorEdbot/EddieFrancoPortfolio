const router = require('express').Router() //eslint-disable-line new-cap
const AuthenticationController = require('../../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../../policies/AuthenticationControllerPolicy')

router.post('/register', 
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)
router.post('/login', 
  AuthenticationController.login)

module.exports = router
