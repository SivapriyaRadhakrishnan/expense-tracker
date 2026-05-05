import React, { useState } from 'react';

function TransactionForm({ onAddTransaction, onLimitChange, budgetLimit }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !amount || !date) return;

    onAddTransaction({
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      title: title.trim(),
      amount: Number(amount),
      type,
      date,
    });

    setTitle('');
    setAmount('');
    setType('Income');
    setDate('');
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div className="transaction-form__header">
        <p className="sm-label">➕ Add transaction</p>
        <h2>Log your income or expense</h2>
        <p className="form-copy">
          Add a new entry and keep your budget target up to date with smart alerts.
        </p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Freelance payment"
            required
          />
        </label>

        <label className="form-field">
          <span>Amount</span>
          <input
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 420"
            required
          />
        </label>

        <label className="form-field">
          <span>Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </label>

        <label className="form-field">
          <span>📅 Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="budget-target-card">
        <div>
          <p className="sm-label">🎯 Budget target</p>
          <p className="budget-value">
            {budgetLimit > 0 ? `$${budgetLimit.toFixed(2)}` : 'No budget set yet'}
          </p>
        </div>
        <label className="budget-input-label">
          Target Expense Limit
          <input
            type="number"
            step="10"
            min="0"
            value={budgetLimit || ''}
            onChange={(e) => onLimitChange(e.target.value)}
            placeholder="e.g. 1500"
          />
        </label>
      </div>

      <button type="submit" className="primary-button">
        ➕ Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
