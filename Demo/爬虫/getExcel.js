const request = require("request");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");
const fs = require("fs");

let count = 0;
const result = []; // 结果容器
const getExcel = function(page = "") {
  request(
    {
      url: `http://hrss.sz.gov.cn/xxgk/qtxx/shgs/index${page}.htm`,
      method: "GET",
      encoding: null
    },
    function(error, response, body) {
      if (error || !body) {
        return;
      }
      let html = iconv.decode(body, "GB2312");
      const $ = cheerio.load(html);
      const list = $(".Listcont .ListconC"); //获取公示列表
      for (let i = 0; i < list.length; i++) {
        let singleCont = list.eq(i).find("a");
        let atitle = singleCont.text(); // 公示信息的标题
        let singleHref = singleCont.attr("href"); // 公示信息跳转链接
        let hrefsplit = singleHref.split("/2");
        if (atitle.includes("租房和生活")) {
          request(
            {
              url: `http://hrss.sz.gov.cn/xxgk/qtxx/shgs/2${hrefsplit[1]}`,
              method: "GET",
              encoding: null
            },
            function(error, response, body) {
              if (error || !body) {
                console.log(error);
                return;
              }
              let html = iconv.decode(body, "GB2312");
              let _$ = cheerio.load(html);
              let fileList = $(".fjstyle a");
              console.log(html);
              fs.writeFileSync("samsss.txt", html);
              //
              for (let i = 0; i < fileList.length; i++) {
                let href = fileList.eq(i).attr("href");
                let fileName = fileList.eq(i).text();
                console.log(href);
                // downloadExcel()
              }
            }
          );
        }
        count = count + 1;
        result.push(atitle);
      }
      fs.writeFileSync("sam.txt", result);
    }
  );
};

function downloadExcel(url, filename, callback) {
  var stream = fs.createWriteStream(filename);
  request(url)
    .pipe(stream)
    .on("close", callback);
}

for (let i = 0; i < 30; i++) {
  if (i === 0) {
    getExcel();
  } else {
    getExcel(`_${i}`);
  }
}
