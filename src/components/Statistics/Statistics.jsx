import React from 'react';
import PropTypes from 'prop-types';
import {
  ListStatistics,
  ItemStatistics,
  Green,
  Orange,
  Red,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListStatistics>
      <ItemStatistics>
        <Green>Good: {good}</Green>
      </ItemStatistics>
      <ItemStatistics>
        <Orange>Neutral: {neutral}</Orange>
      </ItemStatistics>
      <ItemStatistics>
        <Red>Bad: {bad}</Red>
      </ItemStatistics>
      <ItemStatistics>Total: {total}</ItemStatistics>
      <ItemStatistics>
        <Green>Positive feedback: {positivePercentage}%</Green>
      </ItemStatistics>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
