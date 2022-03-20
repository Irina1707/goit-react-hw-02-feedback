import React from 'react';
import PropTypes from 'prop-types';
import { StatisticList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <StatisticList>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
        </StatisticList> 
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} % </p>
    </>
)


Statistics.propTypes = {
    neutral: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;