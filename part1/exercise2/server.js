const http = require('http')
const server = http.createServer((req, res) => {
    res.end('Hello World')
    }
)

const serverNumber = process.env.PORT || 8000
server.listen(serverNumber)
console.log('Server started in port ' + serverNumber)


