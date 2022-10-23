const schedule = require('../../models/schedule');
const parse = require('../../tools/parser');

async function updateSchedule(req, res) {
	try {
		if (!req.file) throw new Error('Отправьте файл');
		console.log(req.file.filename);
		let sch = parse(req.file.filename);
		console.log(sch);
		res.send( { msg: 'Ok' } );
	} catch(e) {
		console.log(e);
		res.status(400).send(e.message);
	}
}

module.exports = updateSchedule;