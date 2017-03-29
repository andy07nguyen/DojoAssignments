console.log('FROM FRIENDS CONTROLLER JS:');
var session = require('express-session');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var Login = mongoose.model('Login');

module.exports = {
// INDEX: SHOW
  index: function(req,res){
    Friend.find({}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'index'});
  },
// CREATE:
  create: function(req,res){
    // console.log('data: ', req.body)
    var new_user = new Friend({ name:req.body.name, question: req.body.question, options: [req.body.option1, req.body.option2, req.body.option3, req.body.option4], _user_id: req.body._user_id});
    new_user.save(function(err, userData){
      console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'create'});
  },
// UPDATE: VOTE
  update: function(req,res){
    console.log('CONTROLLER JS: ', req.params.id, req.body.index)
    Friend.findOne({ _user_id: req.params.id }, function(err, userData){
      if(err){
        res.json(err);
      } else {
        console.log('CONTROLLER JS: ', userData)
        userData.options[req.body.index].vote++
        userData.save(function(err, data){
          // console.log(data)
          if(err){
            res.json(err);
          } else {
            res.json(data)
          }
        })
      }
    })
  },
// DELETE:
  delete: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    var current_user = Friend.findOne({ _id: req.params.id });
    // console.log('CONTROLLER JS: ', current_user)
    current_user.remove(function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'delete'});
  },
// SHOW:
  show: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    Friend.findOne({ _id: req.params.id}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'show'});
  },
// ***************************LOGIN***************************** //
// LOGIN:
  login: function(req,res){
    // console.log('CONTROLLER JS: ', req.body)
    if(!req.body.name){
      res.end("CONTROLLER JS: Invaild entry. Please try again.");
    } else {
      var new_login = new Login({ name: req.body.name });
      new_login.save(function(err, data){
        if(err){
          res.json(err);
        } else {
          // console.log("CONTROLLER JS SESSION DATA: ", req.session.user)
          req.session.user = new_login;
          res.json(data);
        }
      })
    }
  },

};
