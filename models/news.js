const { Schema, model } = require('mongoose');

const Novelty = new Schema({
	author: {
		type: String,
		default: "неизвестно"
	},
	date: {
		type: String,
		default: (new Date(Date.now())).toDateString()
	},
	title: {
		type: String,
		default: 'None'
	},
	text: {
		type: String,
		default: 'CONTENT'
	},
	tags: {
		type: [String],
		default: ['#Новости']
	},
	img: String
});

module.exports = model('news', Novelty);