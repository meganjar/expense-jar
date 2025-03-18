import React, { useEffect } from "react";
import { useStore, useReceiptsRequest } from "../store";

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
        <div key={receipt.id}>
          <p>
            ${receipt.totalCost}  {receipt.vendor}
          </p>
        </div>
      ))}
    </div>
  );
}
