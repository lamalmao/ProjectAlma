const { Schema, model } = require('mongoose');

const Code = new Schema({
	value: {
		type: String,
		unique: true,
		required: true
	},
	role: String
});

module.exports = model('codes', Code);