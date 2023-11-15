import React from "react";
import TableRowTransaction from "./TableRowTransaction";

function TableTransaction({transactions, handleDelete}) {
  

 async function deleteTransaction(id) {
   await fetch(`http://localhost:3000/transactions/${id}`, {
    method : "DELETE",
  });
  handleDelete(id)
 }
    return(
      
    <div className="transaction-table">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TableRowTransaction 
            key={transaction.id} 
            transaction={transaction} 
            onDelete={deleteTransaction} 
          />
        ))}
      </tbody>
    </table>  
   </div>     
    )
}
export default TableTransaction;