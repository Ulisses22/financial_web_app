const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")

router.use("/api", transactionController)
router.route("/").get((req, res) =>

    operationsController.selectTransactions().then((result) => {
        console.log(result.total);
        try {
            res.render("index", {
                result: result.transactions.data,
                bill: result.bill,
                balance: result.balance,
                total: result.total,
            })
        } catch (error) {
            res.render("404")
        }
    })
);

module.exports = router;