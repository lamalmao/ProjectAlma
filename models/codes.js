const { Schema, model } = require('mongoose');

const Code = new Schema({
	value: {
		type: String,
		unique: true,
		required: true
	},
	role: {
		type: String,
		required: true,
		default: 'student'
	}
});

module.exports = model('codes', Code);