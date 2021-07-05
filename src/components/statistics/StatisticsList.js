import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statistics.module.css';

export default function Section({ title, stats }) {
  return (
    <section className={`${s.section}`}>
      {title && <h2 className={`${s.title}`}>{title}</h2>}
      <ul className={`${s.statisticsList}`}>
        {stats.map(stats => (
          <li className={`${s.item}`} key={stats.id}>
            <StatisticsItem label={stats.label} percentage={stats.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
