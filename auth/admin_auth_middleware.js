const jwt = require('jsonwebtoken');

const token = require('../settings').secret;

async function adminCheckAuth(req, res, next) {
	try {
		const auth = req.cookies.auth;
		console.log(auth);
		let check = await jwt.verify(auth, token);
		console.log(check);
		if (!check) throw new Error('Необходима авторизация');
		else if(check.role !== 'administrator') throw new Error('Нет доступа');
		else next();
	} catch(e) {
		console.log(e);
		res.status(401).send(e.message);
	}
}

module.exports = adminCheckAuth;