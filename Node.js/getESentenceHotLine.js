/**
 * Author：刘一笔
 * Date: 22.2.25
 * Description: 获取E大干货合集热门划线版
 */

import * as cheerio from 'cheerio';
import fs from 'fs'
import puppeteer from 'puppeteer-core'
import fetch from "node-fetch";

const tabRequestHeader = {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_flourish_data=SFMyNTY.g2gDdAAAAAFkAAlkZXZpY2VfaWRtAAAAJDJkNTBhZDAwLTE1MTgtNGIyOC1hNzk2LTBjMDI5MDg3YTAxN24GANT7uB9_AWIAAVGA.lpxf8niKr-qqkdM-s88MKDShbdalVkulyrS7K7Bt7f0; _flourish_key=SFMyNTY.g3QAAAAEbQAAAAtfY3NyZl90b2tlbm0AAAAYTjZXTTF0eXVJUWhETDZZbUwxSWR3c1RNbQAAAAxhY2Nlc3NfdG9rZW5tAAAAl1NGTXlOVFkuZzJnRGJRQUFBRFJvVm5sRmRFOUVSMk5ZYjJwSGNYQjJXVGhNVFRCUFluUmpaR1I0SzJGcVJVbG1MeXREYVU5dWNYbzRKREpoSkRJME5UazRiZ1lBRlhFVThYNEJZZ0FCVVlBLmpxNjBLZUNoREYtV1BYV3JPbzNMUnVuWm50U0xKRUZaZkpiNkI3NFVCRU1tAAAAB3Byb2ZpbGV0AAAABGQACl9fc3RydWN0X19kABdFbGl4aXIuRmxvdXJpc2guUHJvZmlsZWQAEWlzX3Bhc3N3b3JkX2VtcHR5ZAAEdHJ1ZWQAC3JlbmV3X3Rva2VuZAADbmlsZAAEdXNlcnQAAAAGZAAKX19zdHJ1Y3RfX2QAHEVsaXhpci5GbG91cmlzaC5Qcm9maWxlLlVzZXJkAAphdmF0YXJfdXJsbQAAAE5odHRwczovL2F2YXRhci55b3V6aGl5b3V4aW5nLmNuL3VzZXIvMjAyMC8xMi8wMi8wMUVSR1dZSzJHQlY5QTg2RjU3RFExMEhZSy5qcGdkAApjcmVhdGVkX2F0dAAAAA1kAApfX3N0cnVjdF9fZAAPRWxpeGlyLkRhdGVUaW1lZAAIY2FsZW5kYXJkABNFbGl4aXIuQ2FsZW5kYXIuSVNPZAADZGF5YQJkAARob3VyYQxkAAttaWNyb3NlY29uZGgCYQBhAGQABm1pbnV0ZWE4ZAAFbW9udGhhDGQABnNlY29uZGEqZAAKc3RkX29mZnNldGEAZAAJdGltZV96b25lbQAAAAlFdGMvVVRDKzhkAAp1dGNfb2Zmc2V0YgAAcIBkAAR5ZWFyYgAAB-RkAAl6b25lX2FiYnJtAAAAAyswOGQAAmlkYgAAYBZkAAhuaWNrbmFtZW0AAAAJ5YiY5LiA56yUZAAFcGhvbmVtAAAACzEzMTcwODY0Mjk4bQAAAAdyZWZlcmVybQAAAC1odHRwczovL3lvdXpoaXlvdXhpbmcuY24vdG9waWNzL2V6b25lL25vZGVzLzI.JpJz0CjgkmAb7DxbrphePGGJfjb5-yNfzX06tp5fMyY"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}

const tabPage = await fetch("https://youzhiyouxing.cn/topics/ezone/nodes/18", tabRequestHeader)

// 因为不是json

const data = await tabPage.text()

let getArticleList = cheerio.default.load(data)
let titleList = getArticleList('.materials li a')

const urlAndName = []
for (let i = 0; i < titleList.length; i++) {
  const url = titleList.eq(i).attr('href')
  urlAndName.push({
    url,
    name: titleList.eq(i).text()
  })
}

const browser = await puppeteer.launch({
  executablePath: './chrome-win/chrome.exe',
});

let count = 0
async function getHotLine(item) {
  const page = await browser.newPage()
  await page.goto(`https://youzhiyouxing.cn${item.url}`, {waitUntil: 'networkidle0'})
  item.hotLine = await page.$$eval('.zx-rangy-hot', function sam(ww) {
    return ww.map(e => e.innerText)
  })

  count +=1
}
urlAndName.forEach(e => {
  getHotLine(e)
})

function writeFile() {
  console.log('开始写文件')
  urlAndName.forEach((e, i) => {
    console.log(i, 'here')
    fs.writeFileSync('sam.md', '## ' + i + '.' + e.name + '\n' + '\n', {flag: 'a+'})

    console.log(typeof e.hotLine)
    e.hotLine.forEach(t =>{
      fs.writeFileSync('sam.md', t + '\n'  + '\n', { flag: 'a+' })
    })
  })
}

const ass = setInterval(() => {
  console.log(count)
  if (count === urlAndName.length) {
    writeFile()
    clearInterval(ass)
  }
}, 1500)

