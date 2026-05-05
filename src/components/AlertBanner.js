import React from 'react';

function AlertBanner({ message, status }) {
  const alertStyles = {
    safe: 'alert-card--safe',
    warning: 'alert-card--warning',
    danger: 'alert-card--danger',
  };

  return (
    <div className={`alert-card ${alertStyles[status]}`}>
      <p>{message}</p>
    </div>
  );
}

export default AlertBanner;
