import React from 'react'

function ReceiptCard({receipt}) {
  return (
    <div>
      <img src="" alt="" />
      <p>{receipt.vendor}</p>
      <p> {receipt.totalCost}</p>
      <button>delete</button>
      <button>edit</button>
    </div>
    
  )
}

export default ReceiptCard