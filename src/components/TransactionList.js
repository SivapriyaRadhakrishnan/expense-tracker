import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDelete, filter, onFilterChange }) {
  return (
    <section className="transaction-list-card">
      <div className="transaction-list-header">
        <div>
          <p className="sm-label">History</p>
          <h2>Transaction history</h2>
        </div>
        <div className="filter-buttons">
          {['all', 'Income', 'Expense'].map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-button ${filter === option ? 'active' : ''}`}
              onClick={() => onFilterChange(option)}
            >
              {option === 'all' ? 'All' : option}
            </button>
          ))}
        </div>
      </div>

      <div className="transaction-list">
        {transactions.length === 0 ? (
          <div className="empty-state">
            <p>No transactions yet. Add your first item above.</p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} onDelete={onDelete} />
          ))
        )}
      </div>
    </section>
  );
}

export default TransactionList;
