const codes = require('../../models/codes');

async function createCode(req, res) {
	try {
		var msg = 'Ok', status = 200;
		const code = {
			value: req.body.value.toString().trim(),
			role: req.body.role.toString().trim()
		};
		if (code.value === '' || !['teacher', 'student', 'admin', 'staff'].includes(code.role)) throw new Error('Неверные параметры');
		await codes.create({
			value: code.value,
			role: code.role
		});
	} catch(e) {
		if (e.code === 11000) msg = 'Код уже существует';
		else msg = e.message;
		console.log(e);
	} finally {
		res.status(status).send(msg);
	}
}

module.exports = createCode;