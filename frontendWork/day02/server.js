const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const formidable = require("formidable");
const fs = require("fs");
const axios = require("axios")
const cheerio = require("cheerio")
const iconv = require("iconv-lite")

// app.set("key", "value")  - setAttribute 용도로 사용
// app.get("key");  - getAttribute의 용도로 사용
// app.get("path", 콜백함수)  - 서버의 doGet 역할
// app.post("path", 콜백함수)  - 서버의 doPost 역할

app.set("port", 8000);

app.use(express.static("public"));

app.use(cors());
app.use(express.static(__dirname + "/public"));
// express의 bodyParser 미들웨어 설정 - POST요청 방식에서 파라미터를 받기 위해.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(app);

var carList = [];
for (var i = 0; i < 10; i++) {
  carList.push({
    no: i,
    name: "car name " + i,
    price: (1 + i) * 1000,
    year: 2008 + i,
    company: "company" + i,
  });
}

function fixListNo(list){
    list.forEach((value,idx)=>{
        value.no = idx
    })
}

server.listen(app.get("port"), () => {
  console.log("hi");
});

app.get("/saram", (req, res) => {
  console.log(req.query);
  res.send("saram get");
});

app.get("/car", (req, res) => {
  console.log("GET - /car");
  res.send(carList);
});

app.get("/car/delete", (req, res) => {
  console.log("GET - /car/delete");
  //console.log(req.query)
  carList.forEach((value, idx)=>{
    if(value.no==req.query.no){
        carList.splice(idx, 1)
    }
  })
  fixListNo(carList)
  res.send(carList);
});

app.get("/car/fix", (req, res) => {
    console.log("GET - /car/fix");
    res.send(carList);
  });

// POST 요청 처리 - INSERT 기능
// post요청에서 파라미터를 받기위해서는 body-parser 미들웨어 필요.
// 테스트는 Post Man으로 하면 된다.
app.post("/car", (req, res) => {
  console.log("POST - /car");
  let carObj = req.body;
  console.log(carObj);
  carObj.no = carList.length;
  carList.push(carObj);
  res.send(carList);
});

app.post("/saram/input", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.writeHead(200, { "Content-Type": "text.html; charset=UTF-8" });
    res.write("<h2>upload OK</h2>");
    res.end();
  });

  form.on("end", function () {
    console.log("파일 갯수 : ", this.length);
    for (var i = 0; i < this.openedFiles.length; i++) {
      let file = this.openedFiles[i];
      console.dir(file);
      var oldpath = file.filepath;
      var newpath =
        "C:/Users/SAMSUNG/OneDrive/바탕 화면/webkit/jswork/day06/public/upload/" +
        file.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
        res.end();
      });
    }
  });
});

app.get("/cheerIo", (req, res) => {
  console.log("GET - /cheerio");
  axios.get("https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105").then((response) => {
      res.send(response.data)
      let htmlCMD = iconv.decode(response.data, "EUC-KR").toString()
      const $ = cheerio.load(htmlCMD)
      let cluster = $("div.list_body div.cluster a")
      console.log(cluster.html())
      res.end()
    });
});
