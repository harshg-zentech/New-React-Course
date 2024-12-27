import PropTypes from 'prop-types';

const ErrorMessage = ({ foodItems }) => {
  let emptyMessage = !foodItems?.length ? <h3>I am still hungry!</h3> : null;

  return (
    <>
      {emptyMessage}
      {/* {!foodItems?.length && emptyMessage} */}
    </>
  );
};

// Add PropTypes validation
ErrorMessage.propTypes = {
  foodItems: PropTypes.array.isRequired
};

export default ErrorMessage;