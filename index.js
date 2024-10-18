const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.js');
const PORT = 3000;
const db = require('./database/db.js');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/product', productRoutes);



app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port http://localhost:${PORT}/product`);
    }
})






