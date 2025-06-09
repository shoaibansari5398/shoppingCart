var express = require('express');
var { addProduct, fetchAllProducts, fetchAProduct } = require("../controller/productController");


var productsRouter = express.Router();


productsRouter.get("/", fetchAllProducts)
productsRouter.get("/:productId", fetchAProduct)
productsRouter.post("/", addProduct);
productsRouter.put("/", () => {
    // url : get /products
})
productsRouter.delete("/", () => {
    // url : get /products
})

module.exports = productsRouter;


/*
(request, response) => {

    var resultPromise = addProduct();
    resultPromise
        .then((data) => {
            response.json(data);
        })
        .catch((err) => {
            response.status(400).json(err);
        })


    // if (result.status) {
    //     response.json(result.data);
    // }
    // else {
    //     response.status(400).json(result.data);
    // }
}
    */