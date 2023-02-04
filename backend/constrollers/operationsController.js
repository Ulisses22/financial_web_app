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

            if(bill[0]==undefined){
                bill[0]=0
            }
            if(balance[0]==undefined){
                balance[0]=0
            }
            if(total[0]==undefined){
                total[0]=0
            }

            const data = [
                {
                    "bill": bill[0].bill,
                    "balance": balance[0].balance,
                    "total": total[0].total,
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


