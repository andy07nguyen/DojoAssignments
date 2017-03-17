// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require the Mongoose Module
var mongoose = require('mongoose');
// Connect to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/dog_db');
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
// Schema
var DogSchema = new mongoose.Schema({
 name: String,
 weight: Number,
 color: String
});

mongoose.model('Dog', DogSchema); // We are setting this Schema in our Models as 'User'
var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'
// Use native promises
mongoose.Promise = global.Promise;

// Routes
// ROOT:
// Root Request:
// The root route -- we want to get all of the users from the database and then render the index view passing it all of the users
app.get('/', function(req, res) {
  Dog.find({}, function(err, users) { // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    if (err) {console.log(err); }
    res.render('index', { dogs: users });
  });
});

// NEW:
app.get('/dog/new', function(req, res){
    res.render('new');
})

// CREATE:
// Add User Request
app.post('/dog', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new Dog({name: req.body.name, weight: req.body.weight, color: req.body.color});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a dog!');
      res.redirect('/');
    }
  })
})

// SHOW: Show ID of one dog
app.get('/dog/:id', function(req, res) {
  Dog.find({ _id: req.params.id }, function(err, response){
    if (err) { console.log(err); }
    res.render('show', { dog: response[0] });
  });
});

app.get('/dog/edit/:id/', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dog: response[0] });
  });
});

// UPDATE:
app.post('/:id', function(req, res) {
  Dog.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  })
})

// DELETE:
app.post('/:id/delete', function(req, res) {
  Dog.remove({ _id: req.params.id }, function(err, result) {
    if (err) { console.log(err); }
    res.redirect('/');
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
