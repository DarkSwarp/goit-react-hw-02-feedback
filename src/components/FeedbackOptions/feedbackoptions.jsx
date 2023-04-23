import PropTypes from 'prop-types';
import css from './feedbackoptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => {
    return (
      <button
        className={css.btn}
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
