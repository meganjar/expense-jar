import React, { useEffect, useState } from "react";
import { useStore, useDeleteReceiptRequest, useReceiptsRequest } from '../store';


function ReceiptCard({receipt}) {
 

  const { action: deleteAction, error } = useDeleteReceiptRequest();
const { action: fetchReceipts } = useReceiptsRequest();
  const { data } = useStore();


  const handleClick = (receipt) => {
    deleteAction({receiptID: receipt._id});
    fetchReceipts()
  }
  
  return (
    <div >
    
      {/*  image field in backlog <img src="" alt="" /> */ }
      <p>{receipt.vendor}</p>
      <p> {receipt.totalCost}</p>
      <button onClick={() => handleClick(receipt)} >delete</button>
     
      {error ? "Error deleting receipt" : "" }
    </div>
    
  )
}

export default ReceiptCard