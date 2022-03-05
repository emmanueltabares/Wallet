export interface WalletI {
    userId: String
    title: String
    expenses: expenseI[];
}

export interface expenseI {
    _id: String,
    name: String,
    price: Number
}