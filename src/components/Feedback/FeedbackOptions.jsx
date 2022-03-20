import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button  } from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <>
    
    <ButtonList>  
      <ButtonItem>
        <Button type='button' onClick={() => onLeaveFeedback(options[0])}>Good</Button>
      </ButtonItem>
    <ButtonItem>
      <Button type='button' onClick={() => onLeaveFeedback(options[1])}>Neutral</Button>
    </ButtonItem>
    <ButtonItem>
      <Button type='button' onClick={() => onLeaveFeedback(options[2])}>Bad</Button>
    </ButtonItem>             
        </ButtonList>
        </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired
};