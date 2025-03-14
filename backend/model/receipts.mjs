import mongoose from "mongoose";

const receiptsSchema = new mongoose.Schema({
  transactionDate: {
    type: Date,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  lineItems: [
    { 
      itemName: {
      type: String,
        required: true},
      itemCost: {
        type: Number,
        required: true,
        min: [0.01, "Total cost must be greater than $0.00."]
    } }],
});

receiptSchema.index({ transactionDate: 1, totalCost: -1 });

export const Receipt = mongoose.model("Receipts", receiptsSchema);
