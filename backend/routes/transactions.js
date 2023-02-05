const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')
const operationsController = require('../constrollers/operationsController')

router.route("/new-transactions").post((req, res) =>{
    transactionController.createTransaction(req, res)
});

router.route("/transactions").get((req, res) =>
    transactionController.selectTrasactions(req, res)
);

router.route("/transaction").get((req, res) =>
    transactionController.selectById(req, res)
);

router.route("/transaction/:_id").get((req, res) => {
    transactionController.deleteById(req, res).then(() => {
        res.status(201).redirect('/#_table');
    })
});

router.route("/transaction").put((req, res) =>
    transactionController.updateTransaction(req, res)
);


module.exports = router