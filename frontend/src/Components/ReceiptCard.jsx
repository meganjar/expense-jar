import React, { useEffect, useState } from "react";
import { useStore, useDeleteReceiptRequest } from '../store';


function ReceiptCard({receipt}) {
 
  const { action, error } = useDeleteReceiptRequest();


  const handleClick = (receipt) => {
    action({receiptID: receipt._id});
   
  }


  
  return (
    <div>
  //comment out image until parsing and transforming is figured out
      {/* <img src="" alt="" /> */}
      <p>{receipt.vendor}</p>
      <p> {receipt.totalCost}</p>
      <button onClick={() => handleClick(receipt)} >delete</button>
      <button>edit</button>
      {error ? "Error deleting receipt" : "" }
    </div>
    
  )
}

export default ReceiptCard