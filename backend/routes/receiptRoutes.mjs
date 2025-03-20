import express from 'express';
import {
  createReceipt,
  getAllReceipts,
  getReceiptById,
  deleteReceipt,
  updateReceipt,
} from '../controllers/receipts.mjs';

const router = express.Router();

router.route('/').post(createReceipt).get(getAllReceipts);

router
  .route('/:id')
  .get(getReceiptById)
  .delete(deleteReceipt)
  .patch(updateReceipt);

export default router;

//mock item
const item = {
  transactionDate: '2025-03-15T14:30:00Z',
  totalCost: 75.5,
  vendor: 'Fresh Market Grocery',
  lineItems: [
    {
      itemName: 'Organic Apples',
      itemCost: 10.0,
    },
    {
      itemName: 'Almond Milk',
      itemCost: 5.5,
    },
  ],
};
