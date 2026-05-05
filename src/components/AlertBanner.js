import { FiCheckCircle, FiAlertTriangle, FiShield } from 'react-icons/fi';

function AlertBanner({ message, status }) {
  const config = {
    safe: {
      icon: <FiCheckCircle className="h-5 w-5 text-emerald-600" />,
      classes: 'bg-emerald-50 text-emerald-900 border border-emerald-100',
      label: 'Success',
    },
    warning: {
      icon: <FiAlertTriangle className="h-5 w-5 text-amber-600" />,
      classes: 'bg-amber-50 text-amber-900 border border-amber-100',
      label: 'Notice',
    },
    danger: {
      icon: <FiShield className="h-5 w-5 text-rose-600" />,
      classes: 'bg-rose-50 text-rose-900 border border-rose-100',
      label: 'Alert',
    },
  };

  const current = config[status] || config.safe;

  return (
    <div className={`flex items-start gap-4 rounded-[28px] px-6 py-4 ${current.classes}`}>
      <div className="mt-0.5">{current.icon}</div>
      <div>
        <p className="text-sm font-semibold">{current.label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{message}</p>
      </div>
    </div>
  );
}

export default AlertBanner;
