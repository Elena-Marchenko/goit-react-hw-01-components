import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.isOnline}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  name: PropTypes.objectOf(PropTypes.string.isRequired),
  avatar: PropTypes.objectOf(PropTypes.string.isRequired),
  isOnline: PropTypes.objectOf(PropTypes.bool.isRequired),
  id: PropTypes.objectOf(PropTypes.number.isRequired),
};
