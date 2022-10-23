const { Router } = require('express');

const adminAuthMiddleware = require('../../auth/admin_auth_middleware');
const userAuthMiddleware = require('../../auth/user_auth_middleware');

// console.log(adminAuthMiddleware);

// const newsApiRouter = require('./news_api.js');
// const appealsApiRouter = require('./appeals_api.js');
// const scheduleApiRouter = require('./schedule_api.js');
// const usersApiRouter = require('./users_api.js');
const signinApiController = require('../../controllers/api/signin_api_controller');
const signupApiController = require('../../controllers/api/signup_api_controller');
const adminApiRouter = require('./admin_api_router.js');

const api = Router();

// api.post('/news', newsApiRouter);
// api.post('/appeals', appealsApiRouter);
// api.post('/schedule', scheduleApiRouter);
// api.post('/users', usersApiRouter);
api.post('/signup', signupApiController);
api.post('/signin', signinApiController);
api.use('/a', adminAuthMiddleware, adminApiRouter);

module.exports = api;