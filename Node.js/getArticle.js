const cheerio = require('cheerio')
const fs = require('fs')
const puppeteer = require('puppeteer-core')

let hrefArr = []

const getHref = function () {
    let file = fs.readFileSync('./index.html').toString()
    const $ = cheerio.load(file)
    let hrefs = $('#sam').find('a')
    const tempArr = Object.keys(hrefs)
    tempArr.forEach(e => {
        if (hrefs[e].attribs && hrefs[e].attribs['href']) {
            hrefArr.push({
                index: e,
                href: hrefs[e].attribs['href']
            })
        }
    })
    fs.writeFileSync('hrefJson.json', JSON.stringify(hrefArr))
}

const saveToPdf = function () {
    (async () => {
        const browser = await puppeteer.launch({
            executablePath: './chrome-win/chrome.exe',
        });

        let i = 177
        async function getPage() {

            const page = await browser.newPage();
            await page.goto(hrefArr[i]['href'], { waitUntil: 'domcontentloaded' });
            var pageTitle

            if (hrefArr[i]['href'].includes('weixin')) {
                pageTitle = await page.$eval('meta[property="og:title"]', el => el.content)
            } else {
                pageTitle = await page.$eval('title', el => el.innerHTML)
            }

            let title = pageTitle.trim()
            // 去掉斜杆
            let titlea = title.replace(/\s*/g, "")
            // 去掉竖线
            let titleb = titlea.replace(/\|/g, "");
            await page.pdf({ path: `${i}${titleb}.pdf` });

            i++

            if (i < hrefArr.length) {
                getPage()
            } else {
                await browser.close();
            }
        }
        getPage()
    })();
}
getHref()

saveToPdf()