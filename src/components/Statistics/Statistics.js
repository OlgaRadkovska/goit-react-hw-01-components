import PropTypes from 'prop-types';

import getRandomColor from '../../utils/getRandomColor';

import { StyledStatistics } from './Statistics.styled';

const Statistics = ({ title = '', stats }) => (
  <StyledStatistics>
    {title && <h2 className="statistics__title">{title}</h2>}

    {stats.length > 0 ? (
      <ul className="statList">
        {stats.map(({ id, percentage, label }) => (
          <li
            key={id}
            style={{ backgroundColor: getRandomColor() }}
            className="statList__item"
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    ) : (
      <p className="warning">Nothing was transferred</p>
    )}
  </StyledStatistics>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
