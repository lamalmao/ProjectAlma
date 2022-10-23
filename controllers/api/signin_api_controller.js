const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { mongoose } = require('mongoose');
const token = require('../../settings').secret;

const users = require('../../models/users');

async function authHandler(req, res) {
	try {

		const data = req.body;
		if (!data.login || !data.password) throw new Error('Не указаны данные для авторизации');

		let dbreq = {};

		if (data.login.includes('@')) dbreq.email = data.login;
		else dbreq.login = data.login;

		const user = await users.findOne(dbreq, '_id password role');
		if (!user) throw new Error('Пользователь не найден');

		let check = await user.comparePassword(data.password);
		if (!check) throw new Error('Неверный пароль');

		const authToken = await jwt.sign( { id: user._id, role: user.role }, token);
		res.cookie('auth', authToken);
		res.send( { msg: 'Ok' } );
		// res.redirect('/main/news');
	} catch(e) {
		res.status(401).send( { msg: e.message } );
	}
}

module.exports = authHandler;