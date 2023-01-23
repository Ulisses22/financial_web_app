const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const transactionSchema = new Schema({
    _id: ObjectId,
    description: {type: String, required: true},
    transaction: {type: String, required: true},
    type: {type: String, required: true},
    balance: {type: Number, required: true},
    bill: {type: Number, required: true},
    total: {type: Number, required: true},
}, 
    // Saves the date and time when inserting or updating any data
    {timestamps: true}
)

const Service  = mongoose.model("Service", transactionSchema);

module.exports = {
    Service,
}