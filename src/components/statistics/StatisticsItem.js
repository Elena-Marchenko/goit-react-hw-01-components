import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function SectionList(props) {
  const { label, percentage } = props;

  return (
    <>
      <span className={`${s.label}`}>{label}</span>
      <span className={`${s.percentage}`}>{percentage}</span>
    </>
  );
}

SectionList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
