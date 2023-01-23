const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')


// Home page route.
router.get('/transactions',(req,res)=>{
    res.send('Home page transactions');
})

module.exports = router