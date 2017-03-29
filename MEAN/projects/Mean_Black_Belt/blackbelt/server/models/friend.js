console.log('FROM FRIENDS MODELS JS:');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// FriendSchema:
var FriendSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'Login'},
  question: String,
  options: [{
    // value: String, vote:{type:Number, default: 0},
    // value: String, vote:{type:Number, default: 0},
    // value: String, vote:{type:Number, default: 0},
    value: String, vote:{type:Number, default: 0}
  }]
}, { timestamps: true });

mongoose.model('Friend', FriendSchema);

// LoginSchema:
var LoginSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

mongoose.model('Login', LoginSchema);
