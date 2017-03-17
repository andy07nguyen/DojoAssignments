// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require the Mongoose Module
var mongoose = require('mongoose');

// DB Connection
mongoose.connect('mongodb://localhost/message_db');

// Schema
var Schema = mongoose.Schema;

// User Schema: & Validation
var UserSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 4 },
 message: { type: String, required: true, maxlength: 100 },
 _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true });

// User Path: Validation
UserSchema.path('name').required(true, 'Name cannot be blank');
UserSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Comment Schema:
var CommentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  _message: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true });

// Comment Path: Validation
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

// Use native promises
mongoose.Promise = global.Promise;

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    // User.find({}, function(err, users){
    //   if (err) {console.log(err); }
    //   res.render('index', { userdata: users });
    // })

    User.find({}).populate('_comments').exec(function(err, users){
      Comment.find({}, function(err, comments) {
        if (!err) {
          res.render('index', {userdata: users, comment: comments});
        }
        else {
          res.redirect('/');
        }
      })
    })
})

// Add User Request
app.post('/process', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User(req.body);
    user.save(function(err){
      if(err){
        res.render('index', {title: "you have errors!", errors: user.errors})
      }
      else {
        res.redirect('/');
      }
    })
})

// Comment Data
app.post('/comment/:id', function(req, res) {
  console.log("POST DATA", req.body);
  User.findOne({ _id: req.params.id }, function(err, users) {
    var newComment = new Comment(req.body)
    newComment._message = users._id;
    users._comments.push(newComment);
    newComment.save(function(err) {
      users.save(function(err){
        if(err) { console.log('Error'); }
        else { res.redirect('/'); }
      })
    })
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
