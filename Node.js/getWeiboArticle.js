import puppeteer from "puppeteer-core";
const urlArr = [
    "https://blog.sina.com.cn/s/blog_7223e6ad0102ypmg.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102w8o5.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102vvz5.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102vvct.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102vri0.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102efy6.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102e4w1.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102e07c.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dysr.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dx6k.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dw0r.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dvg5.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102du93.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dtog.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0102dsxc.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01017acz.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01017abt.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010179q0.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010179oa.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010179ko.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010179hf.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010179f0.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01017977.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad010178s1.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01016vdd.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01016vbl.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01016v9c.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad01000rif.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qy3c.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qx21.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qvm5.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qldl.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qko7.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qkd0.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qk6c.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qd29.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qb80.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100qaq6.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q98u.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q8jo.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q69l.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q5j2.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q4v0.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100q0ui.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pyz3.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pvrq.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100psej.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100prb9.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pf1d.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pdwj.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pdkz.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100pb3f.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100p4a5.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100p33t.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100p24i.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100orks.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100oowd.html",
    "https://blog.sina.com.cn/s/blog_7223e6ad0100on17.html"
  ]

const saveToPDF = function () {
  (async () => {
    const browser = await puppeteer.launch({
      executablePath: './chrome-win/chrome.exe',
    });

    let i = 0
    async function getPage() {
      const page = await browser.newPage();
      await page.goto(urlArr[i], { waitUntil: 'domcontentloaded' });
      let title = await page.$eval('.titName.SG_txta', el => el.innerText)
      let time = await page.$eval('.time.SG_txtc', el => el.innerText)

      let titlea = title.replace('?', '')
      await page.pdf({ path: `${i+1}-${titlea}.pdf` });
      console.log(`${time}${title}打印完毕`)

      i++

      if (i < urlArr.length) {
        getPage()
      } else {
        await browser.close();
      }
    }
    getPage()
  })()
}

saveToPDF()
