const { request, response } = require("express");
var { insertProduct, getAllProducts } = require("../model/productModel");
 
async function addProduct(request, response) {
 
    try {
        var result = await insertProduct();
        response.json(result);
 
    }
    catch (err) {
        response.status(400).json(err.message);
    }
 
 
}
 
 
 
 
async function fetchAllProducts(request, response) {
    try {
        var resultArr = await getAllProducts();
        var resultObj;
        console.log("ResultArr in fetchAllProducts : ", resultArr);
        if (resultArr) {
            resultObj = {
                status: true,
                data: resultArr
            }
            response.json(resultObj);
        }
        else {
 
            resultObj = {
                status: false,
                data: []
            }
            response.json(resultObj);
 
        }
 
 
    }
    catch (err) {
        response.status(400).json(err);
    }
}

async function fetchAProduct(request, response) {
  try {
    var pId = parseInt(request.params.id);
    var result = await getAProducts(pId);
    if(result){
      response.json({data:result})
    }
    else{
      response.json({data:null,message:`No Product found with Id : ${pId}`})
    }
  } catch (error) {
    
  }
}
 
module.exports = {
    addProduct,
    fetchAllProducts,fetchAProduct
}
 
 