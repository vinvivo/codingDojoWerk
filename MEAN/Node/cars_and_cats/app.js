var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);
    if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/tesla-3.jpg') {
        fs.readFile('./images/tesla-3.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/tesla-s.jpg') {
        fs.readFile('./images/tesla-s.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/tesla-x.jpg') {
        fs.readFile('./images/tesla-x.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/coolcat1.png') {
        fs.readFile('./images/coolcat1.png', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/coolcat2.jpg') {
        fs.readFile('./images/coolcat2.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/coolcat3.jpg') {
        fs.readFile('./images/coolcat3.jpg', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('./views/newcars.html', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('That URL is not available');
    }
});

server.listen(7077);
console.log("Running on localhost at port 7077");