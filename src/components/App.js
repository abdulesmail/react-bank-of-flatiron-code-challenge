import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import FormTransaction from './FormTransaction';
import TableTransaction from './TableTransaction';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/abdulesmail/react-bank-of-flatiron-code-challenge/transactions")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  console.log("Items", items);

  function handleDelete(id) {
    const updatedTransactions = items.filter(item => item.id !== id);
    setItems(updatedTransactions);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Replace this with the actual logic to get the data for the new transaction
    const newTransaction = {
      // Example properties, replace with actual data
      date: "2023-01-01",
      description: "New transaction",
      category: "Income",
      amount: 100.0,
    };

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then(res => res.json())
      .then(data => {
        // Handle the response or update the state if needed
        // For example, if the API returns the updated list of transactions, you can setItems(data)
      })
      .catch(error => {
        console.error("Error adding transaction:", error);
      });
  }

  return (
    <div className='App-header'>
      <h1>Flatiron Bank</h1>
      <SearchBar />
      <FormTransaction handleSubmit={handleSubmit} />
      <TableTransaction transactions={items} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
