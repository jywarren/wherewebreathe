var mongoose = require('mongoose');
//mongoose.set('debug', true);
var wwb = mongoose.createConnection('mongodb://localhost/wherewebreathe');

var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
  order: Number,
  qType: String,
  label: String,
  answers: Array,
  question: String
});

module.exports = wwb.model('Question', QuestionSchema);


