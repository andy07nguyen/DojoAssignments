// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code
io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  // If you don't know where this code is supposed to go reread the above info
  socket.on("posting_form",function (data){
      console.log('Someone clicked a button!  Reason: ' + data.name, data.location, data.language, data.comment);
      var rand = Math.floor(Math.random()*1000) + 1;
      // socket.emit('updated_message', {user_name: data.name, user_location: data.location, user_language: data.language, user_comment: data.comment});
      socket.emit('updated_message', {response: data});
        socket.emit('random_number', {response: rand});
  })
})
