const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("./operations")

router.use("/api", transactionController)
router.use("/app", operationsController)


module.exports = router;