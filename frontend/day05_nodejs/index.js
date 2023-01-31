const express = require("express")
const app = express()

//public을 외부에서 접속 가능할 수 있도록 설정
app.use(express.static("public"))

app.listen(3000, ()=>{
    console.log("port: 3000")
})

app.get("/car/input", (req, res)=>{
    console.log(req.query)
    //send 객체 리턴
    //end string 리턴
    res.send(req.query)
})