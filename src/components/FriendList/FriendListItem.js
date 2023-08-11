import PropTypes from "prop-types";
import {Item, StatusCircle, Avatar, Name} from './FriendList.styled.js'

export function FriendListItem({ avatar, name, isOnline }) {
    return (
<Item>
  <StatusCircle></StatusCircle>
  <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{ name}</Name>
</Item>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}