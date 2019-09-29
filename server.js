const http = require("http");
let users = [{ id: 1, name: "xiao1" }, { id: 2, name: "xiao2" }];
let server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url == "/api/user") {
        res.end(JSON.stringify(users));
    } else {
        res.end("Not Found");
    }
});
server.listen(3000, () => {
    console.log("后端服务已启动 端口为3000");
});
