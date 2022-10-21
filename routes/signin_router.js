const { Router } = require('express');

const signinController = require('../controllers/auth/signin');

const router = Router();

router.get('/signin', signinController);


module.exports = router;