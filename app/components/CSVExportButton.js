'use client';
import { saveAs } from 'file-saver';

export default function CSVExportButton({ data }) {
  const exportCSV = () => {
    const csv = data.map(txn => `${txn.date},${txn.description},${txn.category},${txn.amount}`).join('\n');
    const blob = new Blob([`Date,Description,Category,Amount\n${csv}`], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'transactions.csv');
  };

  return (
    <button onClick={exportCSV} className="bg-blue-600 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-700">
      Download CSV
    </button>
  );
}