import express from 'express';
import {} from '../controllers/receipts.mjs'

const router = express.Router();

router.route("/")
  .post(createReceipt)
  .get(getAllReceipts)

router.route("/:id")
  .get(getReceiptById)
  .delete(deleteReceipt)
  .patch(updateReceipt)



export default router;