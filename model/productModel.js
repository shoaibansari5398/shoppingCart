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

function insertProductWithPromise() {
  var myPromise = new Promise((resolve, reject) => {
    connectDB()
      .then((db) => {
        const collection = db.collection("products");
        var productToBeInserted = new Products(
          102,
          "Iphone 15 max pro",
          "../assets/iphone15ProMax.jpg",
          "Apple Iphone 15 pro max 256gb white colour",
          112345,
          12
        );
        collection.insertOne(productToBeInserted);
        resolve("Insertion successful");
      })

      .catch((err) => {
        console.log(err);
        reject("Insertion failed");
      });
  });
  return myPromise;
}

async function insertProduct() {
  try {
    var db = await connectDB();
    const collection = db.collection("products");
    var productToBeInserted = new Products(
      5,
        'Sandisk Memory Card',
        'memorycard.webp',
        'SAMSUNG EVO Plus 128GB Micro SDXC w/SD Adaptor, Up-to 160MB/s, Expanded Storage for Gaming Devices, Android Tablets and Smart Phones, Memory Card, MB-MC128SA/I',
        500,
        3
    );
    var result = await collection.insertOne(productToBeInserted);
    return {
      status: true,
      data: "Insertion successful with inserted Id : " + result.insertedId,
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function getAllProducts() {
  try {
    var db = await connectDB();
    const collection = db.collection("products");
    var resultArr = await collection.find({}).toArray();
    console.log("ResultArr in getAllProducts : " + resultArr);
    return resultArr;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getAProducts(pId) {
  try {
    var db = await connectDB();
    const collection = db.collection("products");
    var result = await collection.findOne({ productId: pId });
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectDB,
  disconnectDB,
  insertProduct,
  getAllProducts,
  getAProducts,
};
