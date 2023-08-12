import { FriendListItem } from "./FriendListItem"
import PropTypes from "prop-types";
import { Wrapper } from './FriendList.styled.js'

export  function FriendList({ friends }) {
  return (
    <Wrapper>
      {friends.map(friend => (
        <div key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        </div>
      ))}
    </Wrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })  
  ).isRequired,
}