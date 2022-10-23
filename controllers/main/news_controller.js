const jwt = require('jsonwebtoken');
const path = require('path');

const users = require('../../models/users');
const news = require('../../models/news');

const secret = require('../../settings').secret;

module.exports = async function(req, res) {
	try {
		var user;
		try {
			user = await users.findOne( { _id: jwt.verify(req.cookies.auth, secret).id }, 'fullname login role' );
		} catch(e) {
			user = undefined;
		}
		const currentNews = await news.find();
		currentNews.map(val => val.img = path.join('/files', 'images', val.img));
		res.render('news', { user, news: currentNews, title: 'Новости' } );
	} catch(e) {
		// statements
		console.log(e);
	}
};