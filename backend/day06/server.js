const http = require('http');
const express = require('express');
const app = express()
const server = http.createServer(app)
const router = express.Router()
const mongojs = require('mongojs');
const db = mongojs("cars")
var static = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');
const session = require("express-session");
const cookieParser = require("cookie-parser");


app.set("port", process.env.PORT || 3000)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', static(path.join(__dirname, '/public')));

server.listen(app.get("port"), ()=>{
    console.log("serer started: http://localhost:"+ app.get("port"))
})

app.use(cookieParser());
app.use(session({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));


app.use("/", router)

router.route("/test").get( (req, res)=>{
    console.log("GET - /test 요청 됨.");

    res.end("<h1>Test page!</h1>");
});

router.route("/mongo").get( (req, res)=>{
    console.log("GET - /mongo 요청 됨.");
    db.cars.find((err, data)=>{
        res.json(data)
    })
    db.close()
    //res.end("<h1>Test page!</h1>");
});

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost";
const client = new MongoClient(uri);

async function getMongo() {
    let data = []
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    const db = client.db("cars");
    const car = db.collection("cars");
    const cursor = car.find({ });
    //await cursor.forEach(console.log);
    await cursor.forEach((d)=>data.push(d))
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return data
}

router.route("/mongoCar").get( async (req, res)=>{
    res.json(await getMongo());
})