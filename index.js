const fs= require('fs');
const http= require('http');

const server = http.createServer(function (req, res) {

    if(req.url==="/"){
        let data= fs.readFileSync('home.html','utf8');
        res.end(data);
    }
    else if(req.url==="/About"){

        let data= fs.readFileSync('about.html','utf8');
        res.end(data);
    }
    else if(req.url==="/Contact"){
        let data= fs.readFileSync('contact.html','utf8');
        res.end(data);

    }
});

server.listen(5500);
console.log("it is listening on port 5500");