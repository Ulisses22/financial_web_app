const router = require("express").Router()

const transactionController = require("./transactions")
const operationsController = require("../constrollers/operationsController")

router.use("/api", transactionController)
router.use("/", async (req, res) =>{

    operationsController.selectTrasactions().then((result)=>{
        console.log(result);
        res.render("index", {result: result})
    })
})

module.exports = router;