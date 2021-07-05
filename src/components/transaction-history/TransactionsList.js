import TransactionsItem from './TransactionsItem';
import s from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={`${s.trHistory}`}>
      <thead>
        <tr className={`${s.trList}`}>
          <th className={`${s.trItem}`}>Type</th>
          <th className={`${s.trItem}`}>Amount</th>
          <th className={`${s.trItem}`}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={`${s.trBodyItem}`} key={item.id}>
            <TransactionsItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
