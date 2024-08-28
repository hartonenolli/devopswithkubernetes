const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(path.join(__dirname, 'pages/index.html')).pipe(res)
    } else if (req.url === '/script.js') {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        fs.createReadStream(path.join(__dirname, 'script.js')).pipe(res)
    }
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        fs.createReadStream(path.join(__dirname, 'pages/404.html')).pipe(res)
    }

    }
)

const serverNumber = process.env.PORT || 8000
server.listen(serverNumber)
console.log('Server started in port ' + serverNumber)