import PropTypes from "prop-types";
import { Wrap , Description, Image,Name, Text, Stats, Quantity, Label} from "./Prifile.styled";

export function Profile({username, tag, location, avatar, stats}) {
    return (
      <Wrap>
      <Description>
        <Image src={avatar} alt="User avatar"  width="260"/>
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>
  
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
          </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
          </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Wrap>
  );
  }

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      })
    ).isRequired,
  }