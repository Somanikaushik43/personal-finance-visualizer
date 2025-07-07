'use client';

export default function SummaryCards({ transactions }) {
  const total = transactions.reduce((sum, txn) => sum + txn.amount, 0);
  const recent = transactions.slice(0, 5);

  const mostSpentCategory = transactions.reduce((acc, txn) => {
    acc[txn.category] = (acc[txn.category] || 0) + txn.amount;
    return acc;
  }, {});

  const topCategory = Object.entries(mostSpentCategory).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-5 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-1">Total Expenses</h3>
        <p className="text-3xl font-bold">₹{total}</p>
      </div>
      <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-5 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-1">Top Category</h3>
        <p className="text-3xl font-bold">{topCategory}</p>
      </div>
    </div>
  );
} 