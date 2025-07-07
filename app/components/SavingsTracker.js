'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function SavingsTracker({ transactions }) {
  const [income, setIncome] = useState(0);

  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);
  const netSavings = income - totalExpenses;

  const chartData = [
    { name: 'Income', value: income },
    { name: 'Expenses', value: totalExpenses },
    { name: 'Net Savings', value: netSavings }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Net Savings Tracker</h2>
      <div className="flex gap-4 items-center mb-4">
        <input
          type="number"
          placeholder="Enter total income"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="border rounded-lg p-2 w-52 shadow-sm"
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}