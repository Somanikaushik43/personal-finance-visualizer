'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const categories = ['Food', 'Travel', 'Shopping', 'Utilities', 'Others'];

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ amount: '', description: '', date: '', category: 'Others' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date) return alert('All fields required');

    const res = await axios.post('/api/transactions', form);
    onAdd(res.data);
    setForm({ amount: '', description: '', date: '', category: 'Others' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" className="border p-2 w-full" />
      <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" />
      <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 w-full" />
      <select name="category" value={form.category} onChange={handleChange} className="border p-2 w-full">
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <Button variant="default" className="w-full mt-4">Add Transaction</Button>
    </form>
  );
}