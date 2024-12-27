import PropTypes from 'prop-types';
import FoodItem from "./FoodItem";

const FoodItems = ({ foodItems }) => {
  return (
    <ul className="list-group">
      {foodItems.map((foodItem) => (
        <FoodItem key={foodItem} foodItem={foodItem}></FoodItem>
      ))}
    </ul>
  )
};

// Add PropTypes validation
FoodItems.propTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodItems;