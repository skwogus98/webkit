const express = require("express")
const app = express();

app.listen(3000, ()=>{
    console.log("hi")
})
//app.get(path, callback)
//nodemon모듈로 실행시 실시간 수정 적용 가능
app.get('/', (req, res)=>{
    console.dir(req.query)
    res.json({"number":req.query.name});
})

app.get('/submit', (req, res)=>{
    console.log("subject : " + req.query.subject)
    console.log("writer : " + req.query.writer)
    console.log("content : " + req.query.content)

    res.end("subject : " + req.query.subject + "name : " + req.query.name + "content : " + req.query.content)
})