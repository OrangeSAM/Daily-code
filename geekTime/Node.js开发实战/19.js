const http = require('http')

http.createServer(function (request, response) {
    if (request.url == '/facicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }
    response.writeHead(200)
    response.end('hi sam')
}).listen(3000)