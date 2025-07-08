'use client';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

export default function TransactionForm({ onAdd }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTxn = { amount: Number(amount), date, description, category };
    const res = await axios.post('/api/transactions', newTxn);
    onAdd(res.data);
    setAmount(''); setDate(''); setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4 rounded shadow bg-gray-50 dark:bg-gray-800">
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Amount" className="border p-2 rounded w-full dark:bg-gray-900" />
      <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border p-2 rounded w-full dark:bg-gray-900" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border p-2 rounded w-full dark:bg-gray-900" />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded w-full dark:bg-gray-900">
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Others">Others</option>
      </select>
      <Button type="submit">Add Transaction</Button>
    </form>
  );
}
