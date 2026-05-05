import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import useLocalStorage from '../hooks/useLocalStorage';
import { formatCurrency } from '../utils/format';

const DashboardPreview = () => {
  const [transactions, setTransactions] = useLocalStorage('flowfi_transactions', []);
  const [budgetLimit, setBudgetLimit] = useLocalStorage('flowfi_budget_limit', 1000);
  const [newTransaction, setNewTransaction] = useState({ type: 'Expense', amount: '', description: '' });

  const income = useMemo(
    () => transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + Number(t.amount), 0),
    [transactions]
  );

  const expense = useMemo(
    () => transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + Number(t.amount), 0),
    [transactions]
  );

  const balance = income - expense;
  const ratio = budgetLimit > 0 ? expense / budgetLimit : 0;

  const getMood = () => {
    if (ratio < 0.5) return { emoji: '😍', text: 'Great job!' };
    if (ratio < 0.75) return { emoji: '🙂', text: 'Doing well' };
    if (ratio < 0.9) return { emoji: '😅', text: 'Watch spending' };
    return { emoji: '😡', text: 'Over budget!' };
  };

  const level = Math.floor(transactions.length / 5) + 1;
  const mood = getMood();

  const handleAddTransaction = () => {
    if (!newTransaction.amount || !newTransaction.description) return;

    const transaction = {
      id: Date.now(),
      ...newTransaction,
      amount: Number(newTransaction.amount),
      date: new Date().toISOString()
    };

    setTransactions(prev => [transaction, ...prev]);
    setNewTransaction({ type: 'Expense', amount: '', description: '' });
  };

  return (
    <section id="dashboard-preview" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Experience FlowFi Dashboard
        </motion.h2>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-gray-900">{formatCurrency(balance)}</div>
            <div className="text-sm text-gray-600">Balance</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(income)}</div>
            <div className="text-sm text-gray-600">Income</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-3xl mb-2">📉</div>
            <div className="text-2xl font-bold text-red-600">{formatCurrency(expense)}</div>
            <div className="text-sm text-gray-600">Expense</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-purple-600">{formatCurrency(budgetLimit)}</div>
            <div className="text-sm text-gray-600">Budget</div>
          </div>
        </motion.div>

        {/* Gamification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-yellow-600">Level {level}</div>
            <div className="text-sm text-gray-600">{transactions.length} transactions</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-4xl mb-2">🔥</div>
            <div className="text-2xl font-bold text-orange-600">7</div>
            <div className="text-sm text-gray-600">Day streak</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 text-center shadow-soft">
            <div className="text-4xl mb-2">{mood.emoji}</div>
            <div className="text-2xl font-bold text-gray-900">{mood.text}</div>
            <div className="text-sm text-gray-600">{Math.round(ratio * 100)}% of budget</div>
          </div>
        </motion.div>

        {/* Add Transaction Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Add New Transaction</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <select
              value={newTransaction.type}
              onChange={(e) => setNewTransaction(prev => ({ ...prev, type: e.target.value }))}
              className="px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input
              type="number"
              placeholder="Amount"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction(prev => ({ ...prev, amount: e.target.value }))}
              className="px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Description"
            value={newTransaction.description}
            onChange={(e) => setNewTransaction(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none mb-4"
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget Limit</label>
            <input
              type="number"
              placeholder="Set budget limit"
              value={budgetLimit}
              onChange={(e) => setBudgetLimit(Number(e.target.value) || 1000)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <button
            onClick={handleAddTransaction}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-shadow"
          >
            Add Transaction
          </button>
        </motion.div>

        {/* Recent Transactions */}
        {transactions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Recent Transactions</h3>
            <div className="space-y-3">
              {transactions.slice(0, 5).map((transaction) => (
                <div key={transaction.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-semibold text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-600">{transaction.type}</div>
                  </div>
                  <div className={`font-bold ${transaction.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'Income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DashboardPreview;