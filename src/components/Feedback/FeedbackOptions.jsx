import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button  } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <>
      <ButtonList>
        {options.map((option) => (
      <ButtonItem>
        <Button type='button' key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </ButtonItem>))}
      </ButtonList></>
  )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired
};


    