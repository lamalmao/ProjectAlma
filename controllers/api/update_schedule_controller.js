const schedule = require('../../models/schedule');
const parse = require('../../tools/parser');

async function updateSchedule(req, res) {
	try {
		if (!req.file) throw new Error('Отправьте файл');
		let sch = parse(req.file.filename), tasks = [];
		for (let i = 0; i < sch.length; i++) {
			let iId = {
				group: sch[i].group,
				date: sch[i].date,
				time: sch[i].time
			};
			if (sch[i].type === 'Delete') {
				tasks.push(schedule.deleteOne(iId));
			} else {
				let c = schedule.findOne({
				}).then(item => {
					if(item) {
						
					}
				});
			}
		}
		res.send( { msg: 'Ok' } );
	} catch(e) {
		console.log(e);
		res.status(400).send(e.message);
	}
}

module.exports = updateSchedule;