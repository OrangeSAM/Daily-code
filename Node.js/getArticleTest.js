const cheerio = require('cheerio')
const fs = require('fs')
const puppeteer = require('puppeteer-core')

let hrefArr = []

const getHref = function () {
    let file = fs.readFileSync('./index.html', 'utf8')
    const $ = cheerio.load(file)
    let hrefs = $('#sam').find('a')
    for (e in hrefs) {
        if (hrefs[e].attribs && hrefs[e].attribs['href']) {
            hrefArr.push({
                index: e,
                href: hrefs[e].attribs['href']
            })
        }
    }
    // fs.writeFile('hrefJson.json', JSON.stringify(hrefArr))
}

const saveToPdf = function () {
    (async () => {
        const browser = await puppeteer.launch({
            executablePath: './chrome-win/chrome.exe',
        });

        let i = 0
        const page = await browser.newPage();
        async function getPage() {
            await page.goto(hrefArr[i]['href'], { waitUntil: 'domcontentloaded' });
            
            let pageTitle

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
            console.log(1)
            i++
        }
        console.log(2)
        if (i < hrefArr.length) {
            getPage()
            console.log(3)
        } else {
            console.log(4)
            await browser.close();
        }
    })();
}
getHref()

saveToPdf()