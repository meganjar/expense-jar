import React, { useEffect, useState } from "react";
import {
  useStore,
  useDeleteReceiptRequest,
  useReceiptsRequest,
} from "../store";

function ReceiptCard({ receipt }) {
  const { action: deleteAction, error } = useDeleteReceiptRequest();
  const { action: fetchReceipts } = useReceiptsRequest();
  const { data } = useStore();

  const handleClick = (receipt) => {
    deleteAction({ receiptID: receipt._id });
    fetchReceipts();
  };

  return (
    <div className="flex flex-col  rounded-2xl border border-gray-500 bg-gradient-to-bl from-gray-600 to-black m-5 p-6 shadow-md">
      {/*  image field in backlog <img src="" alt="" /> */}
      <p className="text-xl ml-5">{receipt.vendor}</p>
      <p className="text-xl ml-5"> {receipt.totalCost}</p>
      <button onClick={() => handleClick(receipt)}>delete</button>

      {error ? "Error deleting receipt" : ""}
    </div>
  );
}

export default ReceiptCard;
