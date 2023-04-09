import PropTypes from 'prop-types';

import { StyledFriendListItem } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = isOnline ? 'online' : 'offline';
  return (
    <StyledFriendListItem>
      <span className={statusClasses}></span>
      <img src={avatar} alt={name} className="avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
