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
            console.log(service);
            
            const response = await TransactionModel.create(service);

            res.status(201).json({response, msg: "Service created successfully!"})
        } catch (error) {
            console.log(error);
        }
    },

    selectTrasactions: async(req,res) => {
        try {
            const response = await TransactionModel.find();
            res.status(200).json({response, msg: "Trasaction has been selected successfully."});
        } catch (error) {
            console.log(error);
        }
    },
    selectById: async(req,res) => {
        try{
            const service = {
                _id: req.body._id,
            }
            const response = await TransactionModel.findById(service);

            res.status(200).json({response, msg: "Transaction has been selected successfully."});
        }catch (error) {
            console.log(error);
        }
    },
    deleteById: async(req, res)=>{
        try {
            const service = {
                _id: req.params._id,
            }
            await TransactionModel.findByIdAndDelete(service);
            // const response = await TransactionModel.findByIdAndDelete(service);
            // res.status(201).json({response, msg: "Transaction has been deleted successfully."});
        } catch (error) {
            console.log(error);
        }
    },
    updateTransaction: async(req,res) =>{

        try {
            const _id = req.body._id;

            const service = {
                description: req.body.description,
                transaction: req.body.transaction,
                type: req.body.type,
                balance: req.body.balance,
                bill: req.body.bill,
                total: req.body.total,
            };
            
            await TransactionModel.updateOne({_id},service);
            const response = await TransactionModel.findById(_id);

            res.status(201).json({response, msg: "Service has been updated successfully."});
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = transactionController
