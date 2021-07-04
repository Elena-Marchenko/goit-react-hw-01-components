import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

export default function Section({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stats => (
          <li className="item" key={stats.id}>
            <StatisticsItem label={stats.label} percentage={stats.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
