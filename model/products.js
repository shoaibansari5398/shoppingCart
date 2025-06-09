class Products {
    productId;
    productName;
    imageUrl;
    description;
    price;
    quantity;
    constructor(productId,
        productName,
        imageUrl,
        description,
        price,
        quantity) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }
}
 
module.exports=Products;