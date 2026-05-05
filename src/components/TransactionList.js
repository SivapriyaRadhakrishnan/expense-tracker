import TransactionItem from './TransactionItem';

function TransactionList({ transactions, onDelete, filter, onFilterChange }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">History</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Transaction history</h2>
        </div>
        <div className="inline-flex flex-wrap gap-3">
          {['all', 'Income', 'Expense'].map((option) => (
            <button
              key={option}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === option ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              onClick={() => onFilterChange(option)}
            >
              {option === 'all' ? 'All' : option}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {transactions.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
            <p>No transactions added yet. Start with a new income or expense.</p>
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
