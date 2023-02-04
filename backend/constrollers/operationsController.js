const { Transaction: TransactionModel } = require('../models/Transaction')

const operationsController = {
    selectTransactions: async () => {
        const res = await fetch('http://localhost:3000/api/transactions');
        if (res.ok) {
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
            const balance = await TransactionModel.aggregate([
                {
                    $match: {"type":"Deposit"}
                }
                ,{
                    $group: {
                        _id: "balance",
                        "balance":{
                            $sum:"$transaction",
                        },
                    },
                    
                }
            ]);


            const data = [
                {
                    "bill": (undefined === bill[0].bill ) || 0,
                    "balance": (undefined === balance[0].balance ) || 0,
                    "total": (undefined === total[0].total ) || 0,
                    "transactions":{
                        data: await res.json()
                    }
                },
            ]
            
            // console.log(data)
            return data[0];
        }        
    },
}


module.exports =  operationsController 


