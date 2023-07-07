import React from 'react';
import PropTypes from 'prop-types';
import { Options } from './Options.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <Options>Good: {good}</Options>
    <Options>Neutral: {neutral}</Options>
    <Options>Bad: {bad}</Options>
    <Options>Total: {total}</Options>
    <Options>Positive feedback: {positivePercentage}%</Options>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
