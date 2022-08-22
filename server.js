const http = require ('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/todo':
            path += 'todo.html';
            break;
        default:
            path += '404.html';
            break;
    }

    // return html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});