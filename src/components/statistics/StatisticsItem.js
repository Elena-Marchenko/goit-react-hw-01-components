import PropTypes from 'prop-types';

export default function SectionList(props) {
  const { label, percentage } = props;

  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
}

SectionList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
