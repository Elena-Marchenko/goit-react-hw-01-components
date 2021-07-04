import PropTypes from 'prop-types';

export default function TransactionsListItem(props) {
  const { type, amount, currency } = props;

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

TransactionsListItem.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
