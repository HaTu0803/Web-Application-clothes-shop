import express from 'express';
import productService from '../services/product-service.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const products = await productService.AllProducts();
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const products = await productService.ProductByID(id);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});
//-------------------NEWPRODUCTS-------------------------------
router.get('/newproducts', async (req, res) => {
    try {
        const products = await productService.AllProducts();
        
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


router.get('/newproducts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const products = await productService.ProductByID(id);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

export default router;
