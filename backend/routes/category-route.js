import express from 'express';
import categoryService from '../services/category-service.js';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

router.get('/categories', async (req, res) => {
    try {
        const products = await categoryService.AllCategory();
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

//-------------------NEWPRODUCTS-------------------------------
router.post('/addcategories', async (req, res) => {
    try {
        const category = req.body;
        const result = await categoryService.AddCategory(category);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//-------------------------EDIT CATEGORY-----------------------------------
router.get('/editcategory/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const categories = await categoryService.GetCategoryByID(id);
        return res.json(categories.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.post('/editcategory/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const category = req.body;
        const result = await categoryService.EditCategoryByID(id, category);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;