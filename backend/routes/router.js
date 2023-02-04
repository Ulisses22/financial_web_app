const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")

router.use("/api", transactionController)
router.route("/").get((req, res) =>

    operationsController.selectTransactions().then((result) => {
        try {
            res.render("index", {
                result: result.transactions.data,
                bill: (result.bill === undefined ? '0,00' : result.bill),
                balance:(result.balance === undefined ? '0,00' : result.balance),
                total: (result.total === undefined ? '0,00' : result.total),
            })
        } catch (error) {
            res.render("404")
        }
    })
);

module.exports = router;