// async function auth(url, req) {
// 	const res = await fetch(url, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		redirect: 'follow',
// 		body: {
// 			JSON.stringify(req)
// 		}
// 	});
// 	if (res.status !== 200) alert(res.json().body.msg);
// }

// async function signup() {
// 	const req = {
// 		fullname: document.getElementById('fullname').value,
// 		group: document.getElementById('group').value,
// 		code: document.getElementById('signId').value,
// 		email: document.getElementById('email').value,
// 		phone: document.getElementById('phone').value,
// 		login: document.getElementById('login').value,
// 		password: document.getElementById('password').value,
// 		role: document.getElementById('role').value
// 	};
// 	await auth('https://laesia.site/api/signup', req);
// }

// async function signin() {
// 	const req = {
// 		login: document.getElementById('login').value,
// 		password: document.getElementById('password').value
// 	};
// 	await auth('https://laesia.site/api/signin', req);
// }

function change() {
	let e = document.getElementById('role').value,
		c = document.getElementById('signId');
	if (e !== 'Студент') c.placeholder = 'Персональный код';
	else c.placeholder = 'Номер зачетки';
}