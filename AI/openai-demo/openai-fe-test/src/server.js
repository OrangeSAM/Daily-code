// 导入方式需要改为 ESM 语法
import http from "http";

// 其余代码逻辑改写为 ESM 语法
http
  .createServer((req, res) => {
    const fileName = "." + req.url;

    if (fileName === "./stream") {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
      });
      res.write("retry: 10000\n");
      res.write("event: connecttime\n");
      res.write("data: " + new Date() + "\n\n");
      res.write("data: " + new Date() + "\n\n");

      let interval = setInterval(() => {
        res.write("data: " + new Date() + "\n\n");
      }, 1000);

      req.connection.addListener(
        "close",
        () => {
          clearInterval(interval);
        },
        false
      );
    }
  })
  .listen(8844, "127.0.0.1");
