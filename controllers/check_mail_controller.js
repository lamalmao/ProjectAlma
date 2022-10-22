const users = require('../models/users');
const confirms = require('../models/confirms');

async function checkMail(req, res) {
	try {
		console.log(req.query);

		const token = req.query.q;
		if (!token) throw new Error('No token specified');

		let check = await confirms.findOneAndDelete( { token: token } );
		if (!check) throw new Error('Unknown token');

		await users.updateOne( { _id: check.user }, {
			$set: {
				verified: true
			}
		});
		res.redirect('/profile');
	} catch(e) {
		console.log(e);
		res.status(401).end(e.message);
	}
}

module.exports = checkMail;