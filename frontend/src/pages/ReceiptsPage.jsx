import React, {useEffect} from 'react';
import useStore from '../store';

export default function ReceiptsPage() {
  const fetchReceipts = useStore((state) => state.fetchReceipts);
  const receipts = useStore((state) => state.receipts); 
  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <div>
      <h2>Receipts</h2>
      {receipts.map((receipt) => (
        <div key={receipt.id}>
          <p>{receipt.name}: ${receipt.amount}</p>
        </div>
      ))}
    </div>
  );
}