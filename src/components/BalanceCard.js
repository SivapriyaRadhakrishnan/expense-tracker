function BalanceCard({ icon, label, value, subtitle, status = 'safe' }) {
  const accent =
    status === 'danger'
      ? 'bg-rose-50 text-rose-700'
      : status === 'warning'
      ? 'bg-amber-50 text-amber-800'
      : 'bg-slate-50 text-slate-950';

  return (
    <div className={`rounded-[28px] border border-slate-200 p-6 shadow-sm ${accent}`}>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white shadow-sm text-slate-900">
        {icon}
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <h3 className="mt-4 text-3xl font-semibold">${value.toFixed(2)}</h3>
      <p className="mt-3 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export default BalanceCard;
