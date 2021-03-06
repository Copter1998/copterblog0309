const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/product', (req, res) => {
    Product.find({}, (err, data) => {
        res.json(data);
    })
})

router.get('/product/:id', (req, res) => {
    Product.findById(req.params.id, (errr, data) => {
        res.json(data);
    })
})

router.delete('/product/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ 'message': 'Delete' })
});

router.post('/product', (req, res) => {
    product = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,

    })
    product.save(() => {
        res.json(product);
    })
})

router.put('/product/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id, req.body);
    res.json({ 'message': 'Updeted' })
})


module.exports = router