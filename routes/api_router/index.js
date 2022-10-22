const { Router } = require('express');

// const newsApiRouter = require('./news_api.js');
// const appealsApiRouter = require('./appeals_api.js');
// const scheduleApiRouter = require('./schedule_api.js');
// const usersApiRouter = require('./users_api.js');
const signupApiController = require('../../controllers/api/signup_api_controller');
const adminApiRouter = require('./admin_api_router.js');

const api = Router();

// api.post('/news', newsApiRouter);
// api.post('/appeals', appealsApiRouter);
// api.post('/schedule', scheduleApiRouter);
// api.post('/users', usersApiRouter);
api.post('/signup', signupApiController);
api.use('/a', adminApiRouter);

module.exports = api;