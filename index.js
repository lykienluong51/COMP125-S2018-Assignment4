const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = "." + req.url;

    if (filePath == "./") {
        filePath = "./index.html";
    }

    let extName = path.extName(filePath);
    let contentType = "text/html";
    switch (extName) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json"
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
        case ".wav":
            contentType = "audio/wav";
            break;
    }

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == "ENOENT") {
                fs.readFile("./404.html", function (error, content) {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, "utf-8");
                });
            }
            else {
                res.writeHead(500);
                res.end("Sorry, server error!");
                res.end();
            }
        }
        else {


        }
    });
});

