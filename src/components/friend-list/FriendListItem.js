import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem(props) {
  const { name, avatar, isOnline } = props;
  return (
    <>
      <span className={isOnline ? `${s.statusOn}` : `${s.statusOff}`}>
        {isOnline}
      </span>
      <img className={`${s.avatar}`} src={avatar} alt="" width="48" />
      <p className={`${s.name}`}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
