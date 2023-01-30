const router = require('express').Router();
const operationsController = require('../constrollers/operationsController')


router.route("/transactions").get((req, res) =>
    operationsController.selectTransactions().then((result) => {
        try {
            res.render("index", { result: result })
        } catch (error) {
            res.render("500")
        }
    })
);


module.exports = router