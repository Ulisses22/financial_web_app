const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")
const currency = require("../../helpers/helpers.ejs")
const XLSX = require("xlsx")

router.use("/api", transactionController)
router.route("/").get((req, res) =>{
    
    operationsController.selectTransactions().then((result) => {
        // console.log(JSON.stringify(result.transactions.data.response));
        // const workbook = XLSX.utils.json_to_sheet(JSON.stringify(result.transactions.data.response));
        // XLSX.writeFile(workbook, 'demo.xlsx');
        try {
            res.render("index", {
                result: result.transactions.data,
                helper: currency,
                bill: (result.bill === undefined ? '$0.00' : currency(result.bill)),
                balance: (result.balance === undefined ? '$0.00' : currency(result.balance)),
                total: (result.total === undefined ? '$0.00' : currency(result.total)),
            })
        } catch (error) {
            res.render("501")
        }
    })
});

module.exports = router;