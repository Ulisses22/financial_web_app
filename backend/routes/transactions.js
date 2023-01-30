const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')

router.route("/transaction").post((req,res)=>
    transactionController.createTransaction(req,res)
);

router.route("/transactions").get((req,res)=>
    transactionController.selectTrasactions(req,res)
);

router.route("/transaction").get((req,res)=>
    transactionController.selectById(req,res)
);

router.route("/transaction/:_id").get((req,res)=>{
    transactionController.deleteById(req,res)
    res.status(201).redirect('/app/transactions');
});

router.route("/transaction").put((req,res)=>
    transactionController.updateTransaction(req,res)
);

module.exports = router