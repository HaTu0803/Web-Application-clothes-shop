import express from 'express';
const router = express.Router();

import paymentControllers from '../services/payment-service.js';


router.post('/payment', async (req, res) => { 
    try {
        const products = await paymentControllers.checkPassword(req.body.pwd, req.body.bankAccountNumber);
        const accountDetails = await paymentControllers.PaytoCash(req.body.user,req.body.money);

        if(accountDetails.accountBalance >= req.body.money){
            console.log("Thành công")
            req.body.money = accountDetails.accountBalance - req.body.money
        }
        else{
            console.log("Thất bại")
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
