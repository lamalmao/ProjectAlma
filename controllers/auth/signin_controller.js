module.exports = function(req, res) {
	try {
		res.render('signin', { title: 'Авторизация' });
	} catch(e) {
		// statements
		console.log(e);
	}
};