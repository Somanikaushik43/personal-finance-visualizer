'use client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MonthlyExpensesChart({ transactions }) {
  const monthlyData = transactions.reduce((acc, txn) => {
    const month = new Date(txn.date).toLocaleString('default', { month: 'short' });
    acc[month] = (acc[month] || 0) + txn.amount;
    return acc;
  }, {});

  const chartData = Object.entries(monthlyData).map(([month, total]) => ({ month, total }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="#6366F1" radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}
