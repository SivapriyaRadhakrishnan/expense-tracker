import React from 'react';

function BudgetStatusCard({ expense, budgetLimit, status }) {
  const ratio = budgetLimit > 0 ? Math.min(expense / budgetLimit, 1) : 0;
  const percentage = Math.round(ratio * 100);

  const barClasses =
    status === 'danger'
      ? 'budget-progress__bar budget-progress__bar--danger'
      : status === 'warning'
      ? 'budget-progress__bar budget-progress__bar--warning'
      : 'budget-progress__bar budget-progress__bar--safe';

  return (
    <div className="budget-status-card">
      <div className="budget-status-card__header">
        <div>
          <p className="sm-label">🎯 Budget status</p>
          <h2>Current spending</h2>
        </div>
        <div className="status-pill status-pill--${status}">{status === 'danger' ? 'Exceeded' : status === 'warning' ? 'Near limit' : 'Safe'}</div>
      </div>

      <div className="budget-status-card__row">
        <div>
          <p className="label-small">💸 Spent</p>
          <p className="budget-number">${expense.toFixed(2)}</p>
        </div>
        <div>
          <p className="label-small">🎯 Limit</p>
          <p className="budget-number">{budgetLimit > 0 ? `$${budgetLimit.toFixed(2)}` : 'Not set'}</p>
        </div>
      </div>

      <div className="budget-progress">
        <div className="budget-progress__track">
          <div className={barClasses} style={{ width: `${percentage}%` }} />
        </div>
        <p className="budget-progress__text">{percentage}% of limit used</p>
      </div>
    </div>
  );
}

export default BudgetStatusCard;
