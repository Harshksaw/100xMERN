// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async(req, res)=>{
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
})

router.get("/transfer", authMiddleware, async(req, res)=>{
    const session = await mongoose.startSesion();

    session.startTransaction();

        const {amount , to } = req.body;


        const account = await Account.findOne({userId: to}).session(session);

        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            })
        }

        const toAccount = await Account.findOne({userId: to}).session(session);

        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            })
        }

        await Account.updateOne({userId:req.userId}, {$inc: {balance : -amount}}).session(session)
        await Account.updateOne({userId:req.to}, {$inc: {balance : amount}}).session(session);

        await session.commitTransaction();
        res.json({
            message:"Transfer Successful"
        })
    session.commitTransaction();

})


module.exports=router;