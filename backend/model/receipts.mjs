import mongoose from 'mongoose';

var imageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

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
        required: true,
      },
      itemCost: {
        type: Number,
        required: true,
        min: [0.01, 'Total cost must be greater than $0.00.'],
      },
    },
  ],
  image: {
    data: Buffer, // Binary data for the image
    contentType: String,
  },
});

receiptsSchema.index({ transactionDate: 1, totalCost: -1 });

export default mongoose.model('Receipts', receiptsSchema);
