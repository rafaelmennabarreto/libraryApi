const mongoose = require('mongoose');
const URI = 'mongodb://localhost/library';

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
