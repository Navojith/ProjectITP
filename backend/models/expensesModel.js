const mongoose = require("mongoose")



const expensesSchema = new mongoose.Schema(
    {
    date: {
        type: Date,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    }
}
)

const Expense = mongoose.model('Expense', expensesSchema)

module.exports = Expense