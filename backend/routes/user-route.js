import express from 'express';
import userService from '../services/user-service.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        const result = await userService.Register(user);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
        const result = await userService.Login(user);
        
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;