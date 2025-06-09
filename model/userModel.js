const { MongoClient } = require("mongodb");
const Products = require("./Products");

const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);
var db;
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to mongodb server");
    db = client.db("shoppingCartDb");
    return db;
  } catch (err) {
    console.log(err);
  }
}

function disconnectDB() {
  client.close();
}

async function registerUser(userObj) {
  try {
    var db = await connectDB();
    var collection = db.collection("users");
    var result = await collection.insertOne(userObj);
    return {
      status: true,
      data: "Insertion successful with inserted Id : ",
    };
  } catch (error) {
    console.log(error)
    throw error
  }
}

async function validateUser(userObj) {
    try {
      console.log(userObj)
    var db = await connectDB();
    var collection = db.collection("users");
    var result = await collection.findOne({email:userObj.email,password:userObj.password});
    return result
  } catch (error) {
    console.log(error)
    throw error
  }

}

module.exports = { registerUser, validateUser };
