import PropTypes from 'prop-types';
import styles from "./FoodItem.module.css"

const FoodItem = ({ foodItem }) => {
  return (
    <li className={`list-group-item ${styles['hg-custom-item']}`}>
      <span className={styles['hg-custom-span']}>{foodItem}</span>
      </li>
  );
};

// Add PropTypes validation
FoodItem.propTypes = {
  foodItem: PropTypes.string.isRequired
};

export default FoodItem;