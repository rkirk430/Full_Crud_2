// controllers/products_controller.js

const express = require('express')
const router = express.Router()
//Simulated Database
const products = require('../models/product_model')

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


// Product "index" route - GET - all products

router.get('/', (req, res) => {
    // res.send(products)
    const context = { products }
    res.render('index', context)
})


// Products "create" route - POST requests -> request body (new product data)

router.post('/', (req, res) => {
    
    products.push(req.body)
    res.redirect('/products')

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

