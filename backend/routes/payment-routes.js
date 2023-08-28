import express from 'express';
// const express = require('express');
const router = express.Router();

import paymentControllers from '../services/payment-service.js';


router.post('/payment', async (req, res) => {
    const pwd = req.body.pwd;
    const email = req.body.email;
    console.log("abc")

    try {
        const products = await paymentControllers.checkPassword(pwd,email);
        return res.json(products.recordsets[0]);
        console.log(products.recordsets[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
//     router.get('/payment', async (req, res) => {
//         try {
//             const products = await paymentControllers.PayToCash(type);
//             return res.json(products.recordsets[0]);
//         } catch (error) {
//             console.log(error)
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
// });
// router.get('/checkpassword', async (req, res) => {
//     paymentModel.checkPasswordModel(req.body.UserID, (err,data)=>{
//         if(err) res.json({err: true})
//         else{
//             if(bcrypt.compareSync(req.body.BankAccountNumber, data.BankAccountNumber))
//             {
//                 res.json({err: false})
//                 return
//             }
//             res.json({err: true})
//         }
//     })

// });

export default router;
