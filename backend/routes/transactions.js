const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')

router.get('/transactions',(req,res)=>{
    res.send('Oi');
})

module.exports = router