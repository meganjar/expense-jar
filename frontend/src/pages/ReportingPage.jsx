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
      (!endDate || r.transactionDate <= endDate),
  );

  const total = filteredReceipts.reduce(
    (sum, receipt) => sum + receipt.totalCost,
    0,
  );
  return (
    <>
      <h2 className=" flex text-center text-4xl font-bold text-white mx-20 just mb-4">
        Reporting
      </h2>
      <div
        className="flex flex-col gap-3 w-4/5
   mx-8  
                rounded-2xl border border-gray-500 
                bg-gradient-to-bl from-gray-600 to-black 
                p-9 shadow-sm"
      >
        <h3>Total : ${total.toFixed(2)}</h3>
        <div className="flex justify-between">
          <label className="text-lg" htmlFor="start">
            Start date:{" "}
          </label>
          <input
            id="start"
            type="date"
            max={new Date().toISOString().split("T")[0]}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            name="start"
            className="mx-5 p-2 border rounded"
          />
        </div>
        <div className="flex justify-between">
          <label className="text-lg" htmlFor="end">
            End date:{" "}
          </label>
          <input
            id="end"
            type="date"
            max={new Date().toISOString().split("T")[0]}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            name="start"
            className="mx-5 p-2 border rounded"
          />
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto pt-5 overflow-x-auto">
        <table className="w-full border-collapse text-center">
          <thead className="bg-gray-800 text-white text-xl font-semibold">
            <tr>
              <th className="text-xl p-3 min-w-[35px]">Cost</th>
              <th className="text-xl p-3 min-w-[35px]">Vendor</th>
              <th className="text-xl p-3 min-w-[35px]">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-900 text-xl">
            {filteredReceipts.map((receipt) => (
              <tr className="px-2 py-4 hover:bg-gray-700" key={receipt._id}>
                <td className="text-lg p-3 min-w-[35px]">
                  ${receipt.totalCost}
                </td>
                <td className="text-lg p-3 min-w-[35px]">{receipt.vendor}</td>
                <td className="text-lg p-3 min-w-[35px]">
                  {new Date(receipt.transactionDate).toLocaleDateString(
                    "en-CA",
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
