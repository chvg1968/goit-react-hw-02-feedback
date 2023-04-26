import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => onLeaveFeedback(index)}>
            {option}
          </button>
        ))}
      </div>
    );
  }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions; 