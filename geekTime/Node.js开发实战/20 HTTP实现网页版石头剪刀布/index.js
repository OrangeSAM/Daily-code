const queryString = require('querystring')
const http = require('http')
const url = require('url')
const fs = require('fs')

const game = require('./game')


let playWon = 1

let playerLastAction = null
let sameCount = 0
http.createServer(function (request, response) {
    const parsedUrl = url.parse(request.url)

    if (parsedUrl.pathname == '/favicon.ico') {
        response.writeHead(200);
        response.end();
        return
    }

    if (parsedUrl.pathname == '/game') {
        const query = queryString.parse(parsedUrl.query);
        const palyerAction = query.action

        const gameResult = game(palyerAction)

        if (playWon > 3 || sameCount == 9) {
            response.writeHead(500)
            response.end('不玩了， 你耍赖')
            return
        }

        if (playerLastAction && playerLastAction == palyerAction) {
            sameCount++;
        } else {
            sameCount = 0
        }

        playerLastAction = palyerAction

        if (sameCount >= 3) {
            response.writeHead(500)
            response.end('你作弊')
            sameCount = 9
            return
        }

        response.writeHead(200)
        if (gameResult == 0) {
            response.end('平局')
        } else if (gameResult == 1) {
            response.end('你赢了')
            playWon += 1
        } else if (gameResult == -1) {
            response.end('你输了')
        }
    }

    if (parsedUrl.pathname == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }
}).listen(3000)