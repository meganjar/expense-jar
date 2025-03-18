import React from "react";

function NewReceipt() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="merchant">Merchant</label>
          <input type="text" id="merchant" name="merchant" />
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" name="amount" />
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="category" />
          <label htmlFor="date">Date</label>
          <input type="text" id="date" name="date" />

          
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
          <label htmlFor="line-item">Item </label>
          <input type="text" id="line-item" name="line-item" />
        
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewReceipt;
