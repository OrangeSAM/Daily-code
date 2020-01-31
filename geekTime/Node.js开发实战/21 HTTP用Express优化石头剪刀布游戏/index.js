const queryString = require('querystring')
const http = require('http')
const url = require('url')
const fs = require('fs')
const express = require('express')

const game = require('./game')

const app = express()

// 赢的次数
let playWon = 1

// 玩家上一次游戏动作
let playerLastAction = null

// 玩家连续出同一个动作的次数
let sameCount = 0

app.get('/favicon.ico', function (request, response) {
    response.status(200)
    return
})

app.get('/game', function (request, response) {
    const query = request.query
    const palyerAction = query.action

    const gameResult = game(palyerAction)

    if (playWon > 3 || sameCount == 9) {
        response.status(500)
        response.send('不玩了， 你耍赖')
        return
    }

    if (playerLastAction && playerLastAction == palyerAction) {
        sameCount++;
    } else {
        sameCount = 0
    }

    playerLastAction = palyerAction

    if (sameCount >= 3) {
        // 连续三次出相同的时候，打印你作弊，后面就进入不玩了你耍赖
        response.status(500)
        response.send('你作弊')
        sameCount = 9
        return
    }

    response.status(200)
    if (gameResult == 0) {
        response.send('平局')
    } else if (gameResult == 1) {
        response.send('你赢了')
        playWon += 1
    } else if (gameResult == -1) {
        response.send('你输了')
    }
})

app.get('/', function (request, response) {
    response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})

app.listen(3000)