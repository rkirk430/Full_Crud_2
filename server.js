const express = require('express');
const app = express();
const PORT = 5000;
app.set ('view engine', 'ejs')

//Simulated Database
const products = require('./models/product_model')

//Application static files configuration
app.use(express.static('public'));


//=============================================================================================
                        //Routes/Controllers
//=============================================================================================

//Index Route - catches GET requests to /products/ and RENDERS ALL products
app.get('/products/', (req,res) => {
    const context = { products };
    res.render('index.ejs', context);
})


//Show Route - catches GET requests to /products/index/ and RENDERS a SINGLE product
app.get('/products/:id/', (req,res) => {
    let productId = req.params.id
    const context = {
        oneProduct: products[productId],
        message: "This is the show route"
    }
    res.render('show.ejs', context)
})

// 404 Error Catchall -- Put after all other routes!

app.get("/*", (req,res) => {
    const context = {error: req.error};
    return res.status(404).render("404", context);
});



//http://localhost:5000/products/1

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));