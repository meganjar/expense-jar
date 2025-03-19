import React, { useEffect, useState } from "react";
import { useStore, useDeleteReceiptRequest } from '../store';

function ReceiptCard({receipt}) {
 
  const { action, loading, error } = useDeleteReceiptRequest();


  const handleClick = (receipt) => {
    action({receiptID: receipt._id});
  }


  
  return (
    <div>
      <img src="" alt="" />
      <p>{receipt.vendor}</p>
      <p> {receipt.totalCost}</p>
      <button onClick={handleClick} >delete</button>
      <button>edit</button>
    </div>
    
  )
}

export default ReceiptCard