console.log('FROM FRIENDS MODELS JS:');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// FriendSchema:
var FriendSchema = new mongoose.Schema({
  name: String,
  question: {type:String, required:[true,"Invaild Question Entry"], minlength:[8,"Require 8 characters or more"]},
  options: [{
    value: {type:String, required:[true,"Invalid Option Entry"], minlength:[3,"Require 3 characters or more"]}, vote:{type:Number, default: 0}
  }],
  _user_id: {type: Schema.Types.ObjectId, ref: 'Login'}
}, { timestamps: true });

mongoose.model('Friend', FriendSchema);

// LoginSchema:
var LoginSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

mongoose.model('Login', LoginSchema);
