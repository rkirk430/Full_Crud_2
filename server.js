const express = require('express');
const app = express();
const PORT = 5000;

//Temporary Database


//=============================================================================================
                        //Routes/Controllers
//=============================================================================================

//Index Route - catches GET requests to /products/ and responds with ALL products
app.get('/products/', (req,res) => {
    const context = { products: products };
    res.render('index.ejs', context);
})


//Show Route - catches GET requests to /products/index/ and respond with a SINGLE product
app.get('/products/:productIndex', (req,res) => {
    res.send(products[req.params.productIndex]);
});

//http://localhost:5000/products/1

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));