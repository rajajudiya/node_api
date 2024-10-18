const product_model = require('../models/product_model');

class productController {
    static createProduct = async(req, res) =>{
        try {
            const {name, price, description, category, createdAt} =req.body 
            const product = new product_model({
                name : name,
                price : price,
                description : description,
                category : category,
                createdAt : createdAt
            });

            const result = await product.save();
            res.json( result);

        } catch (error) {
            
        }
    }

    static getProducts = async(req, res) =>{
        try {
            const products = await product_model.find();
            res.send("get products");
        } catch (error) {
            console.log(error);
        }
    }

    static getsingleProduct = async (req, res) =>{
        try {
            const products = await product_model.findById(req.params._id);
            res.send("get products");
        } catch (error) {
            console.log(error);
        }
    }

    static updateProduct = (req, res) =>{
        res.send("get products");
    }

    static deleteProduct = (req, res) =>{
        res.send("get products");
    }
}

module.exports = productController;