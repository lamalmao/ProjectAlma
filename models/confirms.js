const { Schema, model, Types } = require('mongoose');

const Confirm = new Schema({
	user: Types.ObjectId,
	token: String
});

module.exports = model('confirms', Confirm);