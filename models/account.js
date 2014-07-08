var mongoose = require('mongoose');
//mongoose.set('debug', true);
var userDB = mongoose.connect('mongodb://localhost/passport_local_mongoose');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = userDB.model('Account', Account);

