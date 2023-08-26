import express from 'express';
import productService from '../services/product-service.js';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

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
router.get('/productdetails/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product1s = await productService.ProductByID(id);
        const product2s = await productService.ProductDetailByID(id);

        const response = {
            product1: product1s.recordsets[0],
            product2: product2s.recordsets[0]
        };

        return res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


//-------------------NEWPRODUCTS-------------------------------
router.post('/addproducts', async (req, res) => {
    try {
        const product = req.body;
        const result = await productService.AddProduct(product);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


router.get('/addproducts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const products = await productService.ProductByID(id);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

//-------------------------EDIT PRODUCT-----------------------------------
router.get('/editproduct/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const products = await productService.GetProductByID(id);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.post('/editproduct/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = req.body;
        const result = await productService.EditProductByID(id, product);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const ProductName = req.body.ProductName;
    const Descrip = req.body.Descrip;
    const Photo = req.body.Photo;
    const CategoryID = req.body.CategoryID;
    const SellerID = req.body.SellerID;
    const SizeID = req.body.SizeID;
    const ColorID = req.body.ColorID;
    const Quantity = req.body.Quantity;
    const Price = req.body.Price;

    try {
        const updateProduct = await productService.UpdateByID(id, ProductName, Descrip,Photo, CategoryID, SellerID, SizeID, ColorID, Quantity, Price);
        return res.json(updateProduct.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});


export default router;
