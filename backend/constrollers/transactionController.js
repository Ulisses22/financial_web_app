const { Transaction: TransactionModel } = require('../models/Transaction')

const transactionController = {
    createTransaction: async(req,res) =>{
        try {
            const service = {
                description: req.body.description,
                transaction: req.body.transaction,
                type: req.body.type,
                balance: req.body.balance,
                bill: req.body.bill,
                total: req.body.total,
            };
            
            const response = await TransactionModel.create(service);

            res.status(201).json({response, msg: "Service created successfully!"})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = transactionController
