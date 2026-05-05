import { useEffect, useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { FiPlusCircle, FiCalendar, FiDollarSign } from 'react-icons/fi';

function TransactionForm({ categories, onAddTransaction, onLimitChange, budgetLimit, onAddCategory }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const options = categories(type);
    setCategory(options[0] || '');
  }, [type, categories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !amount || !date || !category) return;

    onAddTransaction({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title: title.trim(),
      amount: Number(amount),
      type,
      category,
      date,
    });

    setTitle('');
    setAmount('');
    setType('Income');
    setCategory(categories('Income')[0] || '');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">Add transaction</p>
        <h2 className="text-2xl font-semibold text-slate-950">Log income or expense</h2>
        <p className="text-sm leading-6 text-slate-600">
          Add a new entry and keep your budget target up to date with smooth alerts.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Freelance payment"
            required
            className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Amount
          <div className="relative">
            <FiDollarSign className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 420"
              required
              className="w-full rounded-3xl border border-slate-300 bg-white pl-12 pr-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
            />
          </div>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Type
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-700">
          Date
          <div className="relative">
            <FiCalendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
            />
          </div>
        </label>
      </div>

      <CategoryDropdown
        type={type}
        categories={categories}
        value={category}
        onChange={setCategory}
        onCreateCategory={onAddCategory}
      />

      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Budget target</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {budgetLimit > 0 ? `$${budgetLimit.toFixed(2)}` : 'No budget set'}
            </p>
          </div>
          <div className="rounded-3xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            Set a monthly limit
          </div>
        </div>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Target expense limit
          <input
            type="number"
            step="10"
            min="0"
            value={budgetLimit || ''}
            onChange={(e) => onLimitChange(e.target.value)}
            placeholder="e.g. 1500"
            className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-4 text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          />
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5"
      >
        <FiPlusCircle className="h-5 w-5" />
        Add transaction
      </button>
    </form>
  );
}

export default TransactionForm;
