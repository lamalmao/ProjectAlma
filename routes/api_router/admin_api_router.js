const { Router } = require('express');

const createCodeController = require('../../controllers/api/code_create_controller');
const deleteCodeController = require('../../controllers/api/code_delete_controller');

const router = Router();

router.put('/code', createCodeController);
router.delete('/code', deleteCodeController);

module.exports = router;