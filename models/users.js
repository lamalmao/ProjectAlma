const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
		type: String,
		required: true,
		set: setPassword
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

function setPassword(pass) {
	return bcrypt.hashSync(pass, 12);
}

User.methods.comparePassword = async function(pass) {
	const user = this;
	return await bcrypt.compareSync(pass, user.password);
};

module.exports = model('users', User);