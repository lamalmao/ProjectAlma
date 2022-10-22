const crypto = require('crypto');

module.exports = {
	base: 'mongodb://{user}:{pwd}@laesia.site/site',
	host: 'HOST IP',
	secret: crypto.randomBytes(512).toString('hex')
};