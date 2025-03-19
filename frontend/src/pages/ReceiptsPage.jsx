import React, { useEffect } from "react";
import { useStore, useReceiptsRequest } from "../store";
import ReceiptCard from "../Components/ReceiptCard";

export default function ReceiptsPage() {
  const { action, loading, error } = useReceiptsRequest();
  const receipts = useStore((state) => state.data.receipts);
  useEffect(() => {
    action();
  }, [action]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching receipts</div>;

  return (
    <div>
      <h2>Receipts</h2>
      {receipts.map((receipt) => (
        
          <ReceiptCard key={receipt._id}receipt={receipt} />
        
      ))}
    </div>
  );
}
