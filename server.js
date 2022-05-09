const express = require('express');
const app = express();
const PORT = 5000;
app.set ('view engine', 'ejs')
require('./config/db.connection');


const productsController = require('./controllers/products_controller.js');
app.use('/products', productsController);



//Application static files configuration
app.use(express.static('public'));

//Registering the Middleware
app.use(express.urlencoded({ extended: false }));

//Method-override to apply Delete requests
const methodOverride = require('method-override');

//=============================================================================================
                        //Middleware (Put BEFORE Routes)
//=============================================================================================

app.use((req,res,next) => {
    console.log(`${req.method} ${req.originalUrl}`);  // Posts URL & HTTP Method for every request we have
    next();
});

// registering methodOverride will allow us to add a query parameter called _method to our delete form
app.use(methodOverride('_method'));




//http://localhost:5000/products/1

app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));