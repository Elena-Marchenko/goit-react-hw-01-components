import PropTypes from 'prop-types';
import defaultImage from './defaultPicture.png';
import s from './Profile.module.css';
console.log(defaultImage);

export default function Profile(props) {
  const {
    name,
    tag,
    location,
    avatar = defaultImage,
    followers,
    views,
    likes,
  } = props;

  return (
    <div className={`${s.profile}`}>
      <div className={`${s.description}`}>
        <img src={avatar} alt="Аватар пользователя" className={`${s.avatar}`} />
        <p className={`${s.name}`}>{name}</p>
        <p className={`${s.tag}`}>@{tag}</p>
        <p className={`${s.location}`}>{location}</p>
      </div>

      <ul className={`${s.stats}`}>
        <li className={`${s.statsItem}`}>
          <span className={`${s.label}`}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={`${s.statsItem}`}>
          <span className={`${s.label}`}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={`${s.statsItem}`}>
          <span className={`${s.label}`}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
