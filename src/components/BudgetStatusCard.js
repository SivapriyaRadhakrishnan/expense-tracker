function BudgetStatusCard({ expense, budgetLimit, status }) {
  const ratio = budgetLimit > 0 ? Math.min(expense / budgetLimit, 1) : 0;
  const percentage = Math.round(ratio * 100);
  const progressColor =
    status === 'danger'
      ? 'from-rose-500 to-rose-400'
      : status === 'warning'
      ? 'from-amber-500 to-amber-400'
      : 'from-indigo-500 to-violet-500';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-[28px] bg-slate-950 p-6 text-white shadow-soft">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Budget status</p>
          <h2 className="mt-2 text-2xl font-semibold">Current spending</h2>
        </div>
        <div className="rounded-3xl bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">
          {status === 'danger' ? 'Exceeded' : status === 'warning' ? 'Near limit' : 'Safe'}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Spent</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">${expense.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Limit</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {budgetLimit > 0 ? `$${budgetLimit.toFixed(2)}` : 'Not set'}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full bg-gradient-to-r ${progressColor}`} style={{ width: `${percentage}%` }} />
          </div>
          <p className="text-sm text-slate-500">{percentage}% of limit used</p>
        </div>
      </div>
    </div>
  );
}

export default BudgetStatusCard;
