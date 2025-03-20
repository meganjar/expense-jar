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
<div className="rounded-2xl border border-gray-500 bg-gradient-to-bl from-gray-600 to-black p-6 shadow-md">
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
</div >
<div className="w-full max-w-[1000px] mx-auto p-4">
      <table className="w-full border-collapse text-center">
        <thead className="bg-gray-800 text-white font-semibold">
          <tr>
            <th>Cost</th>
            <th>Vendor</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {filteredReceipts.map((receipt) => (
              <tr className="px-4 py-4 hover:bg-gray-700" key={receipt._id}>
                <td>${receipt.totalCost}</td>
                <td>{receipt.vendor}</td>
                <td>{new Date(receipt.transactionDate).toLocaleDateString('en-CA')}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
