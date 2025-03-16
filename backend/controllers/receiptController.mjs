import receipts from "../model/receipts.mjs"

export default async function getAllReceipts(req, res) {
  try {
    const receipts = await receipts.find();
    res.status(200).json(receipts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching receipts", error });
  }
}