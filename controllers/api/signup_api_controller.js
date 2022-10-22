const users = require('../../models/users');
const codes = require('../../models/codes');

async function createUser(req, res) {
	try {
		const data = req.body;
		let code = await codes.findOneAndDelete({ value: data.code }, 'value role'), msg;
		if (!code) throw new Error('Регистрационный код неверен');
		let user = await users.create({
			signID: code,
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
		status = 200;
		msg = 'Ok';
	} catch(e) {
		let status = 401;
		msg = e.message;
		console.log(e);
	} finally {
		res.status(status).res({message: msg});
	}
}

module.exports = createUser;