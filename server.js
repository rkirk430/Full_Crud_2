const express = require('express');
const app = express();
const PORT = 5000;

//Temporary Database
const products = ['berry kombucha', 'mango kombucha', 'white peach kombucha']

// Routes / Controller
app.get('/products/:productIndex', (req,res) => {
    res.send(products[req.params.productIndex]);
});

//http://localhost:5000/products/1

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));