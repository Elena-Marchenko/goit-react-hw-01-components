import PropTypes from 'prop-types';
import Profile from './Profile';
import s from './Profile.module.css';
console.log(s);

export default function ProfileList({ items }) {
  return (
    <ul className={`${s.section}`}>
      {items.map(item => (
        <li key={item.name}>
          <Profile
            name={item.name}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            followers={item.stats.followers}
            views={item.stats.views}
            likes={item.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};
