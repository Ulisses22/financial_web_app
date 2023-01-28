const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    description: {type: String},
    transaction: {type: String},
    type: {type: String},
    balance: {type: Number},
    bill: {type: Number},
    total: {type: Number},
}, 
    // Saves the date and time when inserting or updating any data
    {timestamps: true}
)
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = {
    Transaction,
}