import PropTypes from 'prop-types';

import { StyledFriendList } from './FriendList.styled';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <>
    {friends.length > 0 ? (
      <StyledFriendList>
        {friends.map(({ id, name, avatar, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </StyledFriendList>
    ) : (
      <p className="warning">Nothing was transferred</p>
    )}
  </>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
