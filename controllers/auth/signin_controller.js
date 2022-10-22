const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { mongoose } = require('mongoose');

mongoose.connect(require('../../settings').base);

const users = require('../../models/users');

async function auth(auth, password) {
	const user = await users.findOne(auth, '_id login email password');

	if (!user) throw new Error('Пользователь не найден');
	let check = await user.comparePassword(password);
	if (!check) throw new Error('Пароль неверен');

	const token = crypto.randomBytes(256).toString('hex');

	const jwtAuth = jwt.sign({id: user._id}, token);
	return jwtAuth;
}



module.exports = function(req, res) {
	try {
		res.render('signin', { title: 'Авторизация' });
	} catch(e) {
		// statements
		console.log(e);
	}
};