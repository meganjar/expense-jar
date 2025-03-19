import React from "react";
import { useState } from "react";
import { useStore, useNewReceiptRequest } from "../store";


function NewReceipt() {
  const { action } = useNewReceiptRequest();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; 
    
    const formattedData = {
      vendor: form.vendor.value,
      totalCost: parseFloat(form.totalCost.value),
      transactionDate: new Date(form.transactionDate.value).toISOString(),
      lineItems: [] 
    };
    action(formattedData);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="merchant">Merchant</label>
          <input type="text" id="merchant" name="vendor" required />
          <label htmlFor="amount">Amount $</label>
          <input type="number" id="amount" name="totalCost" required />
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="transactionDate" required/>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewReceipt;
