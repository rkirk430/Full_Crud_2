// controllers/products_controller.js

const express = require('express')
const router = express.Router()
const db = require("../models")  // Removed simulated database const products = require('../models/Product')


// request http://localhost:4000/products

router.get('/new', (req, res) => {
    res.render('new.ejs')
})


// Products "show" route - GET - one product 

router.get('/:id/', (req, res) => {
    let productId = req.params.id

    const context = {
        oneProduct: products[productId],
        message: 'I am the show route',
        id: productId
    }
    res.render('show.ejs', context)
})


// Products "edit" route - GET - display an edit form for one product

router.get('/:id/edit', (req,res)=>{
    const foundProduct = products[req.params.id]
    const context = {
        product: foundProduct,
        id: req.params.id
    }
    res.render('edit.ejs', context)
})


// Ref


// Product "index" route - GET - all products

// router.get('/', (req, res) => {
//     // res.send(products)
//     const context = { products }
//     res.render('index.ejs', context)
// })

// Refactoring the Product "Index" Route - GET - All Products

router.get('/', async (req, res, next) => {
    // res.send(products)
    try {
        const products = await db.Product.find({});
        const context = { products }
        res.render('index.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Products "create" route - POST requests -> request body (new product data)

// router.post('/', (req, res) => {
    
//     products.push(req.body)
//     res.redirect('/products')

// })

// Refactoring the "Create" Route - POST requests -> request body(new product data)

router.post('/', async (req, res, next) => {
    console.log(req);
    console.log(req.body);
    try {
        const createdProduct = await db.Product.create(req.body)
        console.log(createdProduct);
        res.redirect("/products");
    } catch(error) {
        console.log(error);
        req.error = error;
        return next();
    }
})





// Products "destroy" route

router.delete('/:id', (req,res)=>{

    products.splice(req.params.id , 1 )
    res.redirect('/products')
})


// Products "update" route

router.put('/:id', (req,res)=>{
  
    products[req.params.id] = req.body
    res.redirect(`/products/${req.params.id}`)

})

module.exports = router

