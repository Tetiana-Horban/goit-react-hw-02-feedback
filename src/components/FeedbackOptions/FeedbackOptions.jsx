import React from 'react';
import PropTypes from 'prop-types';
import { ListButtons, ItemButton, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButtons>
      {options.map(optionFeedback => (
        <ItemButton key={optionFeedback}>
          <Button
            type="button"
            value={optionFeedback}
            onClick={() => {
              onLeaveFeedback(optionFeedback);
            }}
          >
            {optionFeedback}
          </Button>
        </ItemButton>
      ))}
    </ListButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
