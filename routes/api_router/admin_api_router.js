const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const uploadImg = multer( { dest: path.join(process.cwd(), 'public', 'images') } );
const uploadXls = multer( { dest: path.join(process.cwd(), 'public', 'schedule') } );


const createCodeController = require('../../controllers/api/code_create_controller');
const deleteCodeController = require('../../controllers/api/code_delete_controller');
const createNewsController = require('../../controllers/api/news_create_controller');
const updateScheduleController = require('../../controllers/api/update_schedule_controller');

const router = Router();

router.put('/code', createCodeController);
router.delete('/code', deleteCodeController);

router.put('/news', uploadImg.single('img'), createNewsController);

router.put('/schedule', uploadXls.single('schedule'), updateScheduleController)

module.exports = router;