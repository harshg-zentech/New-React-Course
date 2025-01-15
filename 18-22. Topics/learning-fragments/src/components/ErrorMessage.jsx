const ErrorMessage = ({ foodItems }) => {
  let emptyMessage = !foodItems?.length ? <h3>I am still hungry!</h3> : null;

  return (
    <>
      {emptyMessage}
      {/* {!foodItems?.length && emptyMessage} */}
    </>
  );
};

export default ErrorMessage;