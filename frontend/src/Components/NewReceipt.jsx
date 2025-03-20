import React from "react";
import { useState } from "react";
import { useStore, useNewReceiptRequest, useReceiptsRequest } from "../store";


function NewReceipt() {
  const { action: createReceipt } = useNewReceiptRequest();
  const { action: fetchReceipts } = useReceiptsRequest();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target; 

    const formattedData = {
      vendor: form.vendor.value,
      totalCost: Math.round(form.totalCost.value * 100) / 100,
      transactionDate: new Date(form.transactionDate.value).toISOString(),
      lineItems: [] 
    };
    createReceipt(formattedData);
    fetchReceipts();
    form.reset();
  };
  // addLineItem = () => {   Roadmap item, plus button to add additional line item inputs 
  //   return (
  //     <div>
  //       <label htmlFor="item">Item</label>
  //       <input type="text" id="item" name="item" />
  //       <label htmlFor="cost">Cost</label>
  //       <input type="text" id="cost" name="cost" />
  //     </div>
  //   );
  // };
  return (
    <div className="rounded-2xl border border-gray-500 bg-gradient-to-bl from-gray-600 to-black p-6 shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3" >
     
          <label htmlFor="merchant">Merchant</label>
          <input type="text" id="merchant" name="vendor" required />
          <label htmlFor="amount">Amount $</label>
          <input type="number" step="0.01" id="amount" name="totalCost" required />
          <label htmlFor="date">Date</label>
          <input type="date" max={new Date().toISOString().split('T')[0]}  id="date" name="transactionDate" required/>

          <button type="submit">Submit</button>
       
      </form>
    </div>
  );
}

export default NewReceipt;
