import receipts from "../model/receipts.mjs"


export async function createReceipt(req, res) {
  try {
    const { transactionDate, totalCost, vendor, lineItems } = req.body;

    const newReceipt = new receipts({
      transactionDate,
      totalCost,
      vendor,
      lineItems
    });

    const savedReceipt = await newReceipt.save();
    res.status(201).json(savedReceipt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating receipt", error });
  }
};

export async function getAllReceipts(req, res) {
  try {
    const receipt = await receipts.find();
    console.log(receipts.find)
    res.status(200).json(receipt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching receipts", error });
  }
};

export async function getReceiptById(req, res) {
  try {
    const receipt = await receipts.findById(req.params.id);
    if (!receipt) {
      return res.status(404).json({ message: "receipt not found" });
    }
    res.status(200).json(receipt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching receipt", error });
  }
};

export async function deleteReceipt(req, res) {
  try {
    const receipt = await receipts.findByIdAndDelete(req.params.id);
    if (!receipt) {
      return res.status(404).json({ message: "receipt not found" });
    }
    res.status(200).json({ message: "receipt deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting receipt", error });
  }
};

// only updating the fields that are sent. Don't fetch a patch with the whole object
export async function updateReceipt(req, res) {
  try {
      const updatedReceipt = await receipts.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!updatedReceipt) {
        return res.status(404).json({ message: 'Receipt not found' });
      }

      res.status(200).json(updatedReceipt);
  } catch (error) {
     res.status(500).json({ message: 'Failed to update receipt', error });
  }
};