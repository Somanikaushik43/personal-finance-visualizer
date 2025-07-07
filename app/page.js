'use client';
import { useEffect, useState } from 'react';
import TransactionForm from '@/components/forms/TransactionForm';
import TransactionList from '@/components/TransactionList';
import MonthlyExpensesChart from '@/components/charts/MonthlyExpensesChart';
import CategoryPieChart from '@/components/charts/CategoryPieChart';
import BudgetComparisonChart from '@/components/charts/BudgetComparisonChart';
import SummaryCards from '@/components/dashboard/SummaryCards';
import SavingsTracker from '@/components/SavingsTracker';
import SearchBar from '@/components/SearchBar';
import DateFilter from '@/components/DateFilter';
import CSVExportButton from '@/components/CSVExportButton';
import ThemeToggle from '@/components/ThemeToggle';
import axios from 'axios';

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ from: null, to: null });

  const budgets = {
    Food: 1000,
    Travel: 1500,
    Shopping: 2000,
    Utilities: 1200,
    Others: 800,
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const res = await axios.get('/api/transactions');
    setTransactions(res.data);
  };

  const handleAdd = (newTxn) => {
    setTransactions([newTxn, ...transactions]);
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter((txn) => txn._id !== id));
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = (!dateRange.from || new Date(txn.date) >= new Date(dateRange.from)) &&
      (!dateRange.to || new Date(txn.date) <= new Date(dateRange.to));

    return matchesSearch && matchesDate;
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-extrabold text-gray-800">💸Personal-Finance-Visualizer</h1>
        <ThemeToggle />
      </div>

      <div className="flex flex-wrap gap-4 items-center mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <DateFilter value={dateRange} onChange={setDateRange} />
        <CSVExportButton data={filteredTransactions} />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <TransactionForm onAdd={handleAdd} />
      </div>

      <SummaryCards transactions={filteredTransactions} />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
          <CategoryPieChart transactions={filteredTransactions} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
          <MonthlyExpensesChart transactions={filteredTransactions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Budget vs Actual</h2>
        <BudgetComparisonChart transactions={filteredTransactions} budgets={budgets} />
      </div>

      <SavingsTracker transactions={transactions} />

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
        <TransactionList transactions={filteredTransactions} onDelete={handleDelete} />
      </div>
    </div>
  );
}

// 'use client';
// import { useEffect, useState } from 'react';
// import TransactionForm from '@/components/forms/TransactionForm';
// import TransactionList from '@/components/TransactionList';
// import MonthlyExpensesChart from '@/components/charts/MonthlyExpensesChart';
// import CategoryPieChart from '@/components/charts/CategoryPieChart';
// import BudgetComparisonChart from '@/components/charts/BudgetComparisonChart';
// import SummaryCards from '@/components/dashboard/SummaryCards';
// import axios from 'axios';

// export default function HomePage() {
//   const [transactions, setTransactions] = useState([]);

//   const budgets = {
//     Food: 1000,
//     Travel: 1500,
//     Shopping: 2000,
//     Utilities: 1200,
//     Others: 800,
//   };

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     const res = await axios.get('/api/transactions');
//     setTransactions(res.data);
//   };

//   const handleAdd = (newTxn) => {
//     setTransactions([newTxn, ...transactions]);
//   };

//   const handleDelete = (id) => {
//     setTransactions(transactions.filter((txn) => txn._id !== id));
//   };


//  return (
//   <div className="max-w-5xl mx-auto p-6 space-y-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Personal Finance Visualizer</h1>

//       <div className="bg-white p-6 rounded-2xl shadow-lg">
//         <TransactionForm onAdd={handleAdd} />
//       </div>

//       <SummaryCards transactions={transactions} />

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
//           <CategoryPieChart transactions={transactions} />
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
//           <MonthlyExpensesChart transactions={transactions} />
//         </div>
//       </div>

//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Budget vs Actual</h2>
//         <BudgetComparisonChart transactions={transactions} budgets={budgets} />
//       </div>

//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
//         <TransactionList transactions={transactions} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }