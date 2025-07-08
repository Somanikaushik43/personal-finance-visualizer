// 'use client';
// import { useEffect, useState } from 'react';
// import TransactionForm from '@/components/forms/TransactionForm';
// import TransactionList from '@/components/TransactionList';
// import MonthlyExpensesChart from '@/components/charts/MonthlyExpensesChart';
// import CategoryPieChart from '@/components/charts/CategoryPieChart';
// import BudgetComparisonChart from '@/components/charts/BudgetComparisonChart';
// import SummaryCards from '@/components/dashboard/SummaryCards';
// import SavingsTracker from '@/components/SavingsTracker';
// import SearchBar from '@/components/SearchBar';
// import DateFilter from '@/components/DateFilter';
// import CSVExportButton from '@/components/CSVExportButton';
// import ThemeToggle from '@/components/ThemeToggle';
// import axios from 'axios';

// export default function HomePage() {
//   const [transactions, setTransactions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [dateRange, setDateRange] = useState({ from: null, to: null });

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

//   const filteredTransactions = transactions.filter((txn) => {
//     const matchesSearch =
//       txn.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       txn.category.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesDate = (!dateRange.from || new Date(txn.date) >= new Date(dateRange.from)) &&
//       (!dateRange.to || new Date(txn.date) <= new Date(dateRange.to));

//     return matchesSearch && matchesDate;
//   });

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
//         <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 text-center sm:text-left">
//           💸 Personal-Finance-Visualizer
//         </h1>
//         <ThemeToggle />
//       </div>

//       {/* Search, Filters, Export */}
//       <div className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center mb-6">
//         <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//           <SearchBar value={searchTerm} onChange={setSearchTerm} />
//           <DateFilter value={dateRange} onChange={setDateRange} />
//         </div>
//         <div className="flex gap-2 w-full md:w-auto">
//           <CSVExportButton data={filteredTransactions} />
//         </div>
//       </div>

//       {/* Transaction Form */}
//       <div className="bg-white p-6 rounded-2xl shadow-lg">
//         <TransactionForm onAdd={handleAdd} />
//       </div>

//       {/* Summary Cards */}
//       <SummaryCards transactions={filteredTransactions} />

//       {/* Charts */}
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
//           <CategoryPieChart transactions={filteredTransactions} />
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow-md">
//           <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
//           <MonthlyExpensesChart transactions={filteredTransactions} />
//         </div>
//       </div>

//       {/* Budget Chart */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Budget vs Actual</h2>
//         <BudgetComparisonChart
//           transactions={filteredTransactions}
//           budgets={budgets}
//         />
//       </div>

//       {/* Savings Tracker */}
//       <SavingsTracker transactions={transactions} />

//       {/* All Transactions */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-xl font-semibold mb-4">All Transactions</h2>
//         <TransactionList
//           transactions={filteredTransactions}
//           onDelete={handleDelete}
//         />
//       </div>
//     </div>
//   );
// }

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
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate =
      (!dateRange.from || new Date(txn.date) >= new Date(dateRange.from)) &&
      (!dateRange.to || new Date(txn.date) <= new Date(dateRange.to));

    return matchesSearch && matchesDate;
  });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">💸 Personal-Finance-Visualizer</h1>
        <ThemeToggle />
      </div>

      {/* Clean responsive control layout */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div className="flex-1 min-w-[220px]">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
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
