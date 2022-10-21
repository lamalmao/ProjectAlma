const nodemailer = require('nodemailer');
module.exports = function(req, res) {
	let mailTransporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		auth: {
			user: 'sendernodejs@gmail.com',
			pass: 'iwovimbhzkficdaq'
		}
	});

	let mailDetails = {
		from: 'sendernodejs@gmail.com',
		to: 'akimcom2@gmail.com',
		subject: 'Password replace',
		text: 'Тестовое сообщение'
	};

	mailTransporter.sendMail(mailDetails, function(err, data) {
		if(err) {
			console.log('Error');
		} else {
			console.log('Email sent successfully');
		}
	});
};