'use client';
import React from 'react';

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="space-y-4">
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        transactions.map((txn) => (
          <div
            key={txn._id}
            className="flex justify-between items-center p-4 rounded bg-gray-100 dark:bg-gray-800"
          >
            <div>
              <p className="font-bold text-lg">₹{txn.amount}</p>
              <p>{txn.description}</p>
              <span className={`text-xs font-medium ${txn.category === "Food" ? "text-green-600" : "text-blue-600"}`}>
                {txn.category}
              </span>
              {/* <p className="text-xs">{new Date(txn.date).toLocaleDateString()}</p> */}
            </div>
            <button
              onClick={() => onDelete(txn.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

