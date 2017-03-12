// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // IMAGES: CARS
    else if(request.url === '/cars/images/bmwi8'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/bmwi8.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/cars/images/bmwi3'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/bmwi3.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/cars/images/skyline'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/skyline.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    // IMAGES: CATS
    else if(request.url === '/cats/images/cats1'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/cats1.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/cats/images/cats2'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/cats2.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/cats/images/cats3'){
      // notice we won't include the utf8 encoding
      fs.readFile('images/cats3.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    // FORM:
    else if (request.url === "/cars/new") {
         fs.readFile('views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    // CUSTOM CSS:
    else if(request.url === '/stylesheets/style.css'){
      fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
       response.writeHead(200, {'Content-type': 'text/css'});
       response.write(contents);
       response.end();
      })
    }

    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
