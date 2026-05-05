import React from 'react';
import { formatCurrency, formatDate } from '../utils/format';

function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === 'Income';
  const badgeClass = isIncome ? 'transaction-badge--income' : 'transaction-badge--expense';

  return (
    <div className="transaction-item animate-pop">
      <div className="transaction-item__left">
        <span className={`transaction-badge ${badgeClass}`}>
          {isIncome ? '📈' : '📉'}
        </span>
        <div>
          <p className="transaction-title">{transaction.title}</p>
          <p className="transaction-meta">📅 {formatDate(transaction.date)}</p>
        </div>
      </div>
      <div className="transaction-item__right">
        <p className={isIncome ? 'transaction-amount transaction-amount--income' : 'transaction-amount transaction-amount--expense'}>
          {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
        </p>
        <button type="button" className="delete-button" onClick={() => onDelete(transaction.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
