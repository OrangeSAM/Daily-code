let soundLists = document.getElementsByClassName('sound__coverArt')
console.log(soundLists)
for(let i = 0; i< soundLists.length; i++) {
	soundList[i].click()
    let morebtn = document.getElementsByClassName('sc-button-more sc-button sc-button-medium')
    morebtn[0].click()
    let downloadBtn = document.getElementsByClassName('sc-button-download')
    if (downloadBtn.length > 0) {
        downloadBtn[0].click()
    }
    window.history.back()
}

