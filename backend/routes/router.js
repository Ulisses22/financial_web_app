const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")
const currency = require("../../helpers/helpers.ejs")
const XLSX = require("xlsx")


router.use("/api", transactionController)
router.route("/").get((req, res) => {

    operationsController.selectTransactions().then((result) => {

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

router.route("/download").get((req, res) => {

    operationsController.selectTransactions().then((result) => {

        try {
            const data = result.transactions.data.response


            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, `Transactions`);
            const file = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
            

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=Transactions_.xlsx');
            res.send(file);
        } catch (error) {
            res.render("501")
        }
    })
});

module.exports = router;
