import css from "./TransactionHistoryTr.module.css";
export default function TransactionHistory({
  items: { type, amount, currency },
}) {
  return (
    <tr className={css.itemLine}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
  );
}
