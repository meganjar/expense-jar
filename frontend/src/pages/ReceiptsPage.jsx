import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
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
    <>
      <h2 className="text-4xl font-bold text-white mb-4">Receipts</h2>
      {receipts.map((receipt) => (
        
          <ReceiptCard  key={receipt._id}receipt={receipt} />
        
      ))}
    </>
  );
}
