const { Schema, model } = require('mongoose');

const User = new Schema({
	signID: {
		type: String,
		unique: true,
		required: true
	},
	role: {
		type: String,
		required: true
		// student, teacher, staff, administrator
	},
	login: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		hash: String,
		salt: String,
		// required: true
	},
	fullname: {
		type: String,
		required: true,
		default: 'NONE'
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	phone: {
		type: String
	},
	group: String,
	groupList: Array,
	profession: String
});

module.exports = model('users', User);