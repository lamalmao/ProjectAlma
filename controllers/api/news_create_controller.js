const jwt = require('jsonwebtoken');

const news = require('../../models/news');
const users = require('../../models/users');


const secret = require('../../settings').secret;

async function postNew(req, res) {
	try {
		const data = req.body;
		const user = await users.findOne( { _id: jwt.verify(req.cookies.auth, secret).id }, 'fullname' )
		if (!data.title || !data.text) throw new Error('Не все поля заполнены');
		await news.create({
			author: user.fullname,
			title: data.title,
			text: data.text,
			img: req.file.filename,
			tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : []
		});
		res.send( { msg: 'Ok' } );
	} catch(e) {
		res.status(400).end(e.message);
	}
}

module.exports = postNew;