const mongoose = require('mongoose');

const BarSchema = new mongoose.Schema({
	title: { type: String }
});

module.exports = mongoose.model('Bar', BarSchema, 'bars');