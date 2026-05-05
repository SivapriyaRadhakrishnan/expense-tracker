import React from 'react';

function BalanceCard({ icon, label, value, subtitle, status = 'safe' }) {
  const accent =
    status === 'danger'
      ? 'card--danger'
      : status === 'warning'
      ? 'card--warning'
      : 'card--safe';

  return (
    <div className={`balance-card ${accent}`}>
      <div className="balance-card__icon">{icon}</div>
      <div className="balance-card__body">
        <p className="balance-card__label">{label}</p>
        <h3 className="balance-card__value">{value}</h3>
        <p className="balance-card__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default BalanceCard;
