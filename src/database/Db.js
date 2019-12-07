const mongoose = require('mongoose');
const URI = 'mongodb://localhost/library';

mongoose
  .connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('database connection ok'));

mongoose.Promise = global.Promise;

module.exports = mongoose;
