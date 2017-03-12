var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// STATIC FILES: CSS
app.use(express.static(__dirname + "/static"));

// ROUTES:
app.get('/', function(request, response) {
  response.render('index');
});

app.post('/survey', function(request, response) {
  console.log("hello")
  data = {
    name: request.body.name,
    location: request.body.location,
    language: request.body.language,
    comment: request.body.comment
  };
  response.render('result', {userdata: data});
  // console.log("POST DATA \n\n", req.body)
});


// PORT: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
