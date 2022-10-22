const codes = require('../../models/codes');

async function deleteCode(req, res) {
	try {
		var msg = 'Ok', status = 200;
		const code = {
			value: req.body.code.toString().trim()
		}
		result = await codes.deleteOne({
			value: code.value
		});
		console.log(result);
	} catch(e) {
		msg = e.message;
		console.log(e);
	} finally {
		res.status(status).send(msg);
	}
}

module.exports = deleteCode;