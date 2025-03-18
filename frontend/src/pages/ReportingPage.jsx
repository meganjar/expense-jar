import React, { useEffect } from "react";
import { useStore, useReceiptsRequest } from "../store";

export default function ReportingPage() {
  const { action, loading, error } = useReceiptsRequest();
  const receipts = useStore((state) => state.data.receipts);
  useEffect(() => {
    action();
  }, [action]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching receipts</div>;

  const total = receipts.reduce((sum, receipt) => sum + receipt.totalCost, 0);
  return (
    <div>
      <h2>Reporting</h2>

      <div>total : ${total}</div>
      
      <input type="date" />
      <input type="date" />

      <table>
        <thead>
          <tr>
            <th>Cost</th>
            <th>Vendor</th>
            <th>Line Items</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt) => (
            <tr key={receipt._id}>
              <td>${receipt.totalCost}</td>
              <td>{receipt.vendor}</td>
              <td>{receipt.transactionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
