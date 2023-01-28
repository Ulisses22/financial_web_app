const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')

router.route("/transactions").post((req,res)=> transactionController.createTransaction(req,res))


module.exports = router