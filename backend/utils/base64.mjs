// /utils/receiptSerializer.js
export const serializeReceipts = (receipt) => ({
  ...receipt,
  image: receipt.image?.toString("base64") || null,
});
