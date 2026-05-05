import { FiArrowDownLeft, FiArrowUpRight, FiTrash2 } from 'react-icons/fi';
import { formatCurrency, formatDate } from '../utils/format';

function TransactionItem({ transaction, onDelete }) {
  const isIncome = transaction.type === 'Income';

  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className={`grid h-12 w-12 place-items-center rounded-3xl ${isIncome ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
          {isIncome ? <FiArrowUpRight className="h-5 w-5" /> : <FiArrowDownLeft className="h-5 w-5" />}
        </div>
        <div>
          <p className="text-base font-semibold text-slate-950">{transaction.title}</p>
          <p className="mt-1 text-sm text-slate-500">{formatDate(transaction.date)} • {transaction.category}</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 sm:items-end">
        <p className={`text-lg font-semibold ${isIncome ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
        </p>
        <button
          type="button"
          onClick={() => onDelete(transaction.id)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-rose-300 hover:bg-rose-50"
        >
          <FiTrash2 className="h-4 w-4" /> Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
