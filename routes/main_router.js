const { Router } = require('express');

const newsController = require('../controllers/main/news_controller');
const scheduleController = require('../controllers/main/schedule_controller');
const appealsController = require('../controllers/main/appeals_controller');

const main = Router();

main.get('/news', newsController);
main.get('/schedule', scheduleController);
main.get('/appeals', appealsController);

module.exports = main;