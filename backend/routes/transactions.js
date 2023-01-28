const router = require('express').Router();
const transactionController = require('../constrollers/transactionController')

router.route("/new-transactions").post((req,res)=>
    transactionController.createTransaction(req,res)
)


module.exports = router

// const router = require('express').Router();
// const transactionModel = require('../models/Transaction')


// router.route("/new-transactions").post(async(req,res) =>{
//     const transaction = new transactionModel(req.body);
//     console.log(transaction)

//     try {
//         await transaction.create();

//         res.status(201).json({response, msg: "Service created successfully!"})
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// module.exports = router