const { Schema, model } = require('mongoose');

const Schedule = new Schema({
	group: String,
	lesson: String,
	type: String,
	teacher: String,
	date: String,
	time: String,
	week: Number,
	classroom: String
});

module.exports = model('schedule', Schedule);