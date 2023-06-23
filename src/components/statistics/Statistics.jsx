import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  console.log(title);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <li className="item">
          {stats.map(stat => (
            <>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </>
          ))}
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
