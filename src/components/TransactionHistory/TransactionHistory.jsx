import css from "./TransactionHistory.module.css";
import TransactionHistoryTr from "./TransactionHistoryTr";
export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.headLine}>
            <th className={css.head}>Type</th>
            <th className={css.head}>Amount</th>
            <th className={css.head}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((transaction) => (
            <TransactionHistoryTr items={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
