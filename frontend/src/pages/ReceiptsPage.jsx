import React from 'react'
import useStore from '../store';

export default function ReceiptsPage() {

  const { getReceipts } = useStore();

  return (
    <>
    <div>ReceiptsPage</div>
    {getReceipts.forEach(receipt => {
      console.log(receipt)
    })}
    </>
  )
}
