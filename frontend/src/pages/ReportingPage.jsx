import React, { useEffect, useState } from "react";
import { useStore, useReceiptsRequest } from "../store";

export default function ReportingPage() {
  const { action, loading, error } = useReceiptsRequest();
  const receipts = useStore((state) => state.data.receipts);
  useEffect(() => {
    action();
  }, [action]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching receipts</div>;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const filteredReceipts = receipts.filter(
    (r) =>
      (!startDate || r.transactionDate >= startDate) &&
      (!endDate || r.transactionDate <= endDate)  
  )

  const total = filteredReceipts.reduce((sum, receipt) => sum + receipt.totalCost, 0);
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4"
      >Reporting</h2>

      <h3>total : ${total}</h3>
      <label htmlFor="start">Start date: </label>
      <input
        id="start"
        type="date"
        max={new Date().toISOString().split('T')[0]} 
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        name="start"
      />
      <label htmlFor="end">End date: </label>
      <input
        id="end"
        type="date"
        max={new Date().toISOString().split('T')[0]} 
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        name="start"
      />

      <table>
        <thead>
          <tr>
            <th>Cost</th>
            <th>Vendor</th>
            <th>Line Items</th>
          </tr>
        </thead>
        <tbody>
          {filteredReceipts.map((receipt) => (
              <tr key={receipt._id}>
                <td>${receipt.totalCost}</td>
                <td>{receipt.vendor}</td>
                <td>{receipt.transactionDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
