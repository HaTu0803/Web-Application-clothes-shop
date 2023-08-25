import express from 'express';
import productService from '../services/product-service.js';

const router = express.Router();

router.get('/newproducts', async (req, res) => {
    try {
        const products = await productService.NewProducts();
        
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

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

router.get('/products/catagory/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const products = await productService.ProductByCategoryName(type);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/products/tags', async (req, res) => {
    try {
        const products = await productService.ProductByTags();
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/products/tag/:style', async (req, res) => {
    const style = req.params.style;
    try {
        const products = await productService.ProductByTagName(style);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
