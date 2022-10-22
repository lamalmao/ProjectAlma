const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { mongoose } = require('mongoose');

mongoose.connect(require('../settings').base);

const users = require('../models/users');

async function auth(auth, password) {
	try {
		const user = await users.findOne(auth, '_id login email password');
		if (!user) throw new Error('Пользователь не найден');
		let check = await user.comparePassword(password);
		if (!check) throw new Error('Пароль неверен');
		const token = crypto.randomBytes(256).toString('hex');
		const jwtAuth = jwt.sign({id: user._id}, token);
		return jwtAuth;
	} catch(e) {
		console.log(e);
		return e.message;
	} 
}

const passwordAuthStrategy = new localStrategy(auth);

module.exports.passwordAuth = userAuthStrategy;

// async function wrap() {
	// await users.create({
	// 	signID: 1000000,
	// 	role: 'administrator',
	// 	login: 'admin',
	// 	password: 'admin',
	// 	fullname: 'The God is over us',
	// 	email: 'i@see.you'
	// });
// 	let test = await auth( {login: 'admin'}, 'dmin' );
// 	console.log(test);
// }

// wrap();