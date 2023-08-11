import PropTypes from "prop-types";
import { Container, Title, StatList, Item, Percentage, Label} from './Statistics.styled.js'
import { getRandomHexColor } from './RandomHexColor';

export function Statistics({ title, stats }) {
    return (
        <Container>
            <Title>{title}</Title>

  <StatList>
        {stats.map(stat => (
          <Item key={stat.id}color={getRandomHexColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
</Container>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}