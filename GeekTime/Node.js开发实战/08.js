var playAction = process.argv[process.argv.length - 1];

var random = Math.random() * 3;

var computerAction

if (random < 1) {
    computerAction = 'rock'
} else if (random > 2) {
    computerAction = 'scissor'
} else {
    computerAction = 'paper'
}

if (computerAction === playAction) {
    console.log('平局')
} else if (
    (computerAction === 'rock' && playAction === 'paper') ||
    (computerAction === 'scissor' && playAction === 'rock') ||
    (computerAction === 'paper' && playAction === 'scissor')
) {
    console.log('你赢了')
} else {
    console.log('你输了')
}
