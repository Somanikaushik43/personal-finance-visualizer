'use client';
import axios from 'axios';

export default function TransactionList({ transactions, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`/api/transactions?id=${id}`);
    onDelete(id);
  };

  return (
    <ul className="space-y-2 p-4">
      {transactions.map((txn) => (
        <li key={txn._id} className="flex justify-between items-center border p-2 rounded">
          <div>
            <p>{txn.description}</p>
            <small>{new Date(txn.date).toDateString()} — ₹{txn.amount}</small>
          </div>
          <button onClick={() => handleDelete(txn._id)} className="text-red-500">X</button>
        </li>
      ))}
    </ul>
  );
}