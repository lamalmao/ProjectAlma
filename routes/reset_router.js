const { Router } = require('express');

const resetContoller = require('../controllers/passreset_controller');

const router = Router();

router.get('/forget', resetContoller);

module.exports = router;