// 爬取某目标网站上秦小明的文章
// 先生成所有列表页URL，
// 获得列表页URL后，按顺序获取所有文章链接
// 后面可以生成请求后，用promise.all万马齐奔
// 也可以一篇篇文章获取

const http = require('http')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer-core')

// 列表页URL容器
let listUrl = []
// 所有文章Url
let articleUrl = []



function getArticleUrl(data) {
  let $ = cheerio.load(data)
  let title = $(".infomation a")
  let originCheck = $(".infomation a span")
  let time = $(".infomation .pubtimes")
  if (originCheck[0].children[0].data === '原创') {
    articleUrl.push({
      title: title[0].children[2].data,
      link: title[0].attribs.href,
      time: time[0].children[0].data
    })
  }
}

const saveToPdf = function () {
  (async () => {
    const browser = await puppeteer.launch({
      executablePath: './chrome-win/chrome.exe',
    });
    let i = 0
    async function getPage() {
      const page = await browser.newPage();

      if (!articleUrl[i]['link']) return
      console.log(`http://gzhshoulu.wang/${articleUrl[i]['link']}`)
      await page.goto(`http://gzhshoulu.wang/${articleUrl[i]['link']}`, { timeout: 0, waitUntil: 'domcontentloaded' });

      await page.pdf({ path: `${articleUrl[i]['time']}${i}.pdf` });

      i++

      if (i < articleUrl.length) {
        getPage()
      } else {
        await browser.close();
      }
    }
    getPage()
  })();
}

for (let i = 1; i < 44; i++) {
  let url = ''
  if (i === 1) {
    url = 'http://gzhshoulu.wang/account_xiaoming_qin.html'
  } else {
    url = `http://gzhshoulu.wang/account_xiaoming_qin&page${i}.html`
  }
  http.get(url, function (res) {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        // 一个列表页
        getArticleUrl(rawData)
      } catch (e) {
        console.error(e.message);
      }
    });
  })
  saveToPdf()
}
