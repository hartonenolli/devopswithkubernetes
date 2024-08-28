const http = require('http')

let getRequestCount = 0

const server = http.createServer((req, res) => {
    if (req.url === '/pingpong') {
        getRequestCount++
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('pong { "amount": ' + getRequestCount + ' }')
    }}
)

const serverNumber = process.env.PORT || 8000
server.listen(serverNumber)
console.log('Server started in port ' + serverNumber)