const mongoose = require('mongoose');


const db  = mongoose.connect('mongodb+srv://rajajudiya096:200480@cluster0.vkv54.mongodb.net/ecommerce').then((res) =>{
    console.log("DB Connect")
}).catch((err) =>{
    console.log(err)
})


module.exports = db;

