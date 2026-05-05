import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiDollarSign, FiTrendingUp, FiCreditCard } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import AlertBanner from '../components/AlertBanner';
import BalanceCard from '../components/BalanceCard';
import BudgetStatusCard from '../components/BudgetStatusCard';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import {
  clearCurrentUser,
  getBudgetForUser,
  getCategoriesForUser,
  getCurrentUser,
  getTransactionsForUser,
  saveBudgetForUser,
  saveCategoriesForUser,
  saveTransactionsForUser,
} from '../utils/auth';

const incomeDefaults = ['Salary', 'Bonus', 'Freelance'];
const expenseDefaults = ['Food', 'Fuel', 'Shopping', 'Bills'];

const DashboardPage = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [budgetLimit, setBudgetLimit] = useState(0);
  const [customCategories, setCustomCategories] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setTransactions(getTransactionsForUser(currentUser));
    setBudgetLimit(getBudgetForUser(currentUser));
    setCustomCategories(getCategoriesForUser(currentUser));
  }, [currentUser, navigate]);

  const filteredTransactions = useMemo(() => {
    if (filter === 'all') return transactions;
    return transactions.filter((item) => item.type === filter);
  }, [filter, transactions]);

  const summary = useMemo(() => {
    const income = transactions.filter((item) => item.type === 'Income').reduce((sum, item) => sum + item.amount, 0);
    const expense = transactions.filter((item) => item.type === 'Expense').reduce((sum, item) => sum + item.amount, 0);
    return {
      income,
      expense,
      balance: income - expense,
      budget: budgetLimit,
    };
  }, [transactions, budgetLimit]);

  const status = useMemo(() => {
    if (budgetLimit <= 0) return 'safe';
    if (summary.expense >= budgetLimit) return 'danger';
    if (summary.expense >= budgetLimit * 0.75) return 'warning';
    return 'safe';
  }, [budgetLimit, summary.expense]);

  const handleAddTransaction = (transaction) => {
    const nextTransactions = [transaction, ...transactions];
    setTransactions(nextTransactions);
    saveTransactionsForUser(currentUser, nextTransactions);
    setAlert({ message: 'Transaction added successfully', status: 'safe' });
  };

  const handleDelete = (id) => {
    const nextTransactions = transactions.filter((item) => item.id !== id);
    setTransactions(nextTransactions);
    saveTransactionsForUser(currentUser, nextTransactions);
    setAlert({ message: 'Transaction removed', status: 'warning' });
  };

  const handleLimitChange = (value) => {
    const parsed = Number(value) || 0;
    setBudgetLimit(parsed);
    saveBudgetForUser(currentUser, parsed);
    setAlert({ message: 'Budget target updated', status: 'safe' });
  };

  const handleAddCategory = (type, category) => {
    const nextCategories = Array.from(new Set([...customCategories, category]));
    setCustomCategories(nextCategories);
    saveCategoriesForUser(currentUser, nextCategories);
    setAlert({ message: `${category} added to ${type} categories`, status: 'safe' });
  };

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/login');
  };

  const categoryOptions = (type) => {
    const base = type === 'Income' ? incomeDefaults : expenseDefaults;
    return [...base, ...customCategories.filter((item) => item)];
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 space-y-8">

  {/* 🔹 TOP SECTION (FULL WIDTH) */}
  <section className="space-y-8">

    {/* Welcome Card */}
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Protected dashboard
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950">
            Welcome back to FlowFi
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 rounded-3xl bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700">
          <FiCheckCircle className="h-5 w-5" />
          Logged in as {currentUser}
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-slate-600">
        Your finance workspace is private and only visible after login. Add transactions, set budget targets, and track category performance.
      </p>
    </div>

    {/* 🔥 FULL WIDTH CARDS */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
    >
      <BalanceCard
        icon={<FiDollarSign className="h-5 w-5 text-indigo-500" />}
        label="Balance"
        value={summary.balance}
        subtitle="Net cash available"
      />

      <BalanceCard
        icon={<FiTrendingUp className="h-5 w-5 text-emerald-500" />}
        label="Income"
        value={summary.income}
        subtitle="Total earned"
      />

      <BalanceCard
        icon={<FiCreditCard className="h-5 w-5 text-rose-500" />}
        label="Expense"
        value={summary.expense}
        subtitle="Total spent"
        status={summary.expense > 0 && 'danger'}
      />

      <BalanceCard
        icon={<FiArrowRight className="h-5 w-5 text-violet-500" />}
        label="Budget"
        value={summary.budget}
        subtitle="Monthly limit"
      />
    </motion.div>

  </section>

  {/* 🔹 SECOND SECTION (2-COLUMN BELOW) */}
  <section className="grid gap-8 xl:grid-cols-2">

    {/* LEFT SIDE */}
    <div className="space-y-6">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <TransactionForm
          categories={categoryOptions}
          onAddTransaction={handleAddTransaction}
          onLimitChange={handleLimitChange}
          budgetLimit={budgetLimit}
          onAddCategory={handleAddCategory}
        />
      </div>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <BudgetStatusCard
          expense={summary.expense}
          budgetLimit={budgetLimit}
          status={status}
        />
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="space-y-6">

      {alert && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AlertBanner message={alert.message} status={alert.status} />
        </motion.div>
      )}

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <TransactionList
          transactions={filteredTransactions}
          onDelete={handleDelete}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>

    </div>

  </section>

</main>
    </>
  );
};

export default DashboardPage;
