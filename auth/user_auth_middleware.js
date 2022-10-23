const jwt = require('jsonwebtoken');

const token = require('../settings').secret;

async function checkAuth(req, res, next) {
	try {
		const auth = req.cookies.auth;
		let check = await jwt.verify(auth, token);
		console.log(check);
		if (!check) throw new Error('Нобходима авторизация');
		else next();
	} catch(e) {
		console.log(e.message);
		res.status(401).send(e.message);
	}
}

module.exports = checkAuth;