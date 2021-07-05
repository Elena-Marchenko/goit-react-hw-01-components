import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function TransactionsListItem(props) {
  const { type, amount, currency } = props;

  return (
    <>
      <td className={`${s.type}`}>{type}</td>
      <td className={`${s.amount}`}>{amount}</td>
      <td className={`${s.currency}`}>{currency}</td>
    </>
  );
}

TransactionsListItem.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
