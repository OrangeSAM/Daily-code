/**
 * Author：
 * Date: 22.2.22
 * Description: 获取有知有行官网E大文章金句
 */
import * as cheerio from 'cheerio';
import fetch from "node-fetch"
import fs from 'fs'

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

const tabPage = await fetch("https://youzhiyouxing.cn/topics/ezone/nodes/2", tabRequestHeader)

// 因为不是json

const data = await tabPage.text()

let getArticleList = cheerio.default.load(data)
let titleList = getArticleList('.materials li a')

const urlAndName = []
for (let i = 0; i < 2; i++) {
  const url = titleList.eq(i).attr('href')
  urlAndName.push({
    url,
    name: titleList.eq(i).text()
  })
}

// 依次访问页面，获取标题和热门划线并写入文件。
// 能不能做到，异步同时访问，然后本地排序，加快效率
urlAndName.forEach(async function(item) {
  const articlePage = await fetch(`https://youzhiyouxing.cn${item.url}`, tabRequestHeader)
  const articlePageText = await articlePage.text()

  let getArticlePage = cheerio.default.load(articlePageText)

  const em = getArticlePage('em')
  const hotLine = getArticlePage('.zx-rangy-hot')

  item.cont = {}
  item.cont.em = []
  item.cont.hotLine = []

  for(let i = 0; i < em.length; i++) {
    item.cont.em.push(em.eq(i).text())
  }
  for(let n = 0; n < hotLine.length; n++) {
    item.cont.hotLine.push(hotLine.eq(i).text())
  }
})
setTimeout(() => {
  writeFile()
  console.log(urlAndName)
}, 5000)

function writeFile() {
  urlAndName.forEach(e => {
    fs.writeFileSync('sam.txt', e.name + '\n' + '\n')
    e.cont.em.forEach(t =>{
      fs.writeFileSync('sam.txt', t + '\n', { flag: 'a+' })
    })

  })
}
