'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BudgetComparisonChart({ transactions, budgets }) {
  const categoryTotals = transactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const chartData = Object.keys(budgets).map((category) => ({
    category,
    budget: budgets[category],
    spent: categoryTotals[category] || 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="#82ca9d" />
        <Bar dataKey="spent" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}