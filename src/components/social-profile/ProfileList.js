import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileList({ items }) {
  return (
    <ul>
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
      id: PropTypes.string.isRequired,
    }),
  ),
};
