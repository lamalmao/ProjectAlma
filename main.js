const https = require('https');
const http = require('http');
const express = require('express');
const { mongoose } = require('mongoose');
const fs = require('fs');
const path = require('path');

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



// Временная заглушка
app.get('/main/news', (req, res) => res.end('Ok'));

// Подключение статики
app.use('/files', express.static('public'));

app.use((req, res) => res.redirect('/main/news'));