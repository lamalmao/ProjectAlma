const { Router } = require('express');

const testController = require('../controllers/garbage/test_controller');

const router = Router();

router.get('/test', testController);

module.exports = router;