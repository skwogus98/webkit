const http = require("http");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./template");

var saramList = {
  "saramList":[
      {"no":1, "name":"kim", "email":"email", "phone":"010-1234-5678"},
      {"no":2, "name":"a", "email":"email", "phone":"010-1234-5678"},
      {"no":3, "name":"b", "email":"email", "phone":"010-1234-5678"},
      {"no":4, "name":"c", "email":"email", "phone":"010-1234-5678"},
      {"no":5, "name":"d", "email":"email", "phone":"010-1234-5678"},
      {"no":6, "name":"e", "email":"email", "phone":"010-1234-5678"},
      {"no":7, "name":"e", "email":"email", "phone":"010-1234-5678"},
  ]
}


app.get("/home", (req, res) => {
  var testArr = [
    { no: 1, name: "홍길동", age: 12 },
    { no: 2, name: "김길동", age: 15 },
    { no: 3, name: "박길동", age: 13 },
    { no: 4, name: "최길동", age: 14 },
  ];
  // home.ejs
  // req.app.render(filename, data, callback function)
  req.app.render("home", { testArr }, (err, html) => {
    if (err != null) {
      console.log(err);
    } else {
      res.end(html);
    }
  });
});

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.write("<h1>환영합니다!</h1>");
  res.write("<a href='/day05ex02_1.html'>ex02_1</a>");
  res.end();
  // res.redirect("home")
});

app.get("/saram/list", (req, res) =>{
  res.json(saramList)
})

app.get("/saram/add", (req, res) =>{
  console.log(req.query)
  saramList.saramList.push({
    "no":saramList.saramList.length, 
    "name": req.query.name, 
    "email":req.query.email, 
    "phone":req.query.phone
  })
  res.json(saramList)
})

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 : localhost:3000");
});
