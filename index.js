
const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Handle different routes based on the URL
    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home Page');
    }

    else if (req.url === '/About') {
        // About Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page');
    }

    else if (req.url === '/Contact') {
        // Contact Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page');
    }

    else if (req.url === '/file-write') {
        // File Write Operation
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Error writing file');
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully');
            }
        });

    }
    else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }


});

// Start the server and listen on port 5500
server.listen(5500, () => {
    console.log('it is listening on port 5500');
});
