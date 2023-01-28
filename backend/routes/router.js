const router = require("express").Router()

const transactionController = require("./transactions")

router.use("/", transactionController)

module.exports = router;