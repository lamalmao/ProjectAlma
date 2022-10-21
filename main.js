const https = require('https');
const http = require('http');
const express = require('express');
const { mongoose } = require('mongoose');
const fs = require('fs');
const path = require('path');

// Подключение роутеров
// const mainRouter = require('./routes/main_router');
// const apiRouter = require('./routes/api_router');
// const signinRouter = require('./routes/signin_router');
// const signupRouter = require('./routes/signup_router');
// const adminRouter = require('./routes/admin_router');
// const profileRouter = require('./routes/profile_router');
const garbageRouter = require('./routes/garbage_router');

const settings = require('./settings');

const production = process.env.PRODUCTION || false;

// Подключение к БД
mongoose.connect(settings.base);

// Иницализация приложения Express и http, https серверов
const app = express();
const HTTPServer = http.createServer(app);

// Запуск сайта на сервере с HTTPS
if (production) {
	const HTTPSServer = https.createServer({
		cert: fs.readFileSync(path.join(process.cwd(), 'ssl', 'cert.pem')),
		key: fs.readFileSync(path.join(process.cwd(), 'ssl', 'key.pem'))
	}, app);

	// Запуск HTTP и HTTPS сервера на портах 80 и 443
	HTTPServer.listen({
		port: 80,
		host: settings.host
	}, _ => {
		HTTPSServer.listen({
			port: 443,
			host: settings.host
		}, _ => console.log('Server started with SSL'))
	});

	// Переадресация с HTTP на HTTPS
	app.use((req, res, next) => {
		if (!req.secure) res.redirect(`https://${req.hostname}${req.originalUrl}`);
		else next();
	});
} else HTTPServer.listen(80, _ => console.log('Server started in dev mode'));

// Подключение статики
app.use('/files', express.static('public'));

// Подключение роутеров
// app.use('/main', mainRouter);
// app.use('/profile', profileRouter);
// app.use('/admin', adminRouter);
// app.use('/api', apiRouter);

app.use('/garbage', garbageRouter);

app.use((req, res) => res.redirect('/main/news'));