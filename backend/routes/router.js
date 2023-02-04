const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")

router.use("/api", transactionController)
router.route("/").get((req, res) =>
    operationsController.selectTransactions().then((result) => {
        try {
            res.render("index", { result: result })
        } catch (error) {
            res.render("500")
        }
    })
);

module.exports = router;