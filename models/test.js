const { mongoose } = require('mongoose');
const users = require('./users');

const { base } = require('../settings');

mongoose.connect(base);

let user = users({
	signID: 'testID',
	role: 'student',
	login: 'login',
	password: {
		hash: 'hash',
		salt: 'salt'
	},
	fullname: 'Зубенко Ебан Ебаныч',
	email: 'example@mail.org',
	group: 'МИН12',
});

setTimeout(async _ => await user.save(), 2000);