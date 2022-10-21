const { Router } = require('express');

const signupController = require('../controllers/auth/signup');

const router = Router();

router.get('/signup', signupController);

module.exports = router;