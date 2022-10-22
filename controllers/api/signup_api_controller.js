const users = require('../../models/users');
const codes = require('../../models/codes');
const confirms = require('../../models/confirms');
const mailer = require('../../tools/emailer');

async function createUser(req, res) {
	try {
		const data = req.body;
		if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(data.email)) throw new Error('Введенная почта неверна');
		else if (data.login.includes(' ')) throw new Error('Логин не должен содержать пробелы')
		console.log(data);
		const code = await codes.findOne( { value: data.code }, 'value role');
		var msg = 'Чтобы подтвержить почтовый адрес - перейдите по ссылке, которая вам прийдет на почту';
		var status = 200;
		if (!code) throw new Error('Регистрационный код неверен');
		let user = await users.create({
			signID: code.value,
			role: code.role,
			login: data.login,
			password: data.password,
			fullname: data.fullname,
			email: data.email,
			phone: data.phone,
			group: data.group ? data.group : '',
			groupList: data.groupList ? data.groupList : [],
			profession: code.profession ? code.profession : ''
		});
		await codes.deleteOne( { value: code.value } );
		const token = await mailer(data.email, data.fullname);
		await confirms.create({
			user: user._id,
			token: token
		});
	} catch(e) {
		status = 401;
		if (e.code === 11000) msg = 'Такой пользователь уже существует';
		else msg = e.message;
	} finally {
		res.status(status).send( { message: msg } );
	}
}

module.exports = createUser;