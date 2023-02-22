const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost";
const client = new MongoClient(uri);

export async function getMongo() {
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
    console.log(data)
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
  return data
}
//(async ()=> {console.log(await run())})()
