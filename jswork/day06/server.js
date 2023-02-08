const http = require("http")
const express = require("express")
const app= express()

const formidable = require("formidable")
const fs = require("fs")

// app.set("key", "value")  - setAttribute 용도로 사용
// app.get("key");  - getAttribute의 용도로 사용
// app.get("path", 콜백함수)  - 서버의 doGet 역할
// app.post("path", 콜백함수)  - 서버의 doPost 역할

app.set("port", 3000)

app.use(express.static("public"));

const server = http.createServer(app)

server.listen(app.get("port"), ()=> {
    console.log("hi")
})

app.post("/saram/input",(req, res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=> {
        res.writeHead(200, {"Content-Type":"text.html; charset=UTF-8"})
        res.write("<h2>upload OK</h2>")
        res.end()
    });

    form.on("end", function (){
        console.log("파일 갯수 : ", this.length);
        for(var i=0; i<this.openedFiles.length; i++) {
            let file = this.openedFiles[i];
            console.dir(file);
            var oldpath = file.filepath;
            var newpath = 'C:/Users/SAMSUNG/OneDrive/바탕 화면/webkit/jswork/day06/public/upload/' + file.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        }
    });

})