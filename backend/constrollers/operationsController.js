const { Transaction: TransactionModel } = require('../models/Transaction')

const operationsController = {
    selectTransactions: async () => {
        const res = await fetch('http://localhost:3000/api/transactions');
        if (res.ok) {
            const data = await res.json();
            return data;
        }        
    },
    bill: async () => {
        try {
            const bill = await TransactionModel.aggregate([
                {
                    $match: {"type": "Bill"},
                }
                ,{
                    $group: {
                        _id: "bill",
                        "bill":{
                            $sum:"$transaction"
                        },
                    },
                    
                }
            ])
            return bill;
        } catch (error) {
            console.log(error);
        }
    },
    total: async () => {
        try {
            const total = await TransactionModel.aggregate([
                {
                    $group: {
                        _id: "total",
                        "total":{
                            $sum:"$transaction"
                        },
                    },
                    
                }
            ])
            return total;
        } catch (error) {
            console.log(error);
        }
    },
    balance: async () => {
        try {
            const balance = await TransactionModel.aggregate([
                {
                    $match: {"type":"Deposit"}
                }
                ,{
                    $group: {
                        _id: "balance",
                        "balance":{
                            $sum:"$transaction"
                        },
                    },
                    
                }
            ])
            return balance;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports =  operationsController 


