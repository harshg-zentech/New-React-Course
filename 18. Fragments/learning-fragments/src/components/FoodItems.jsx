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

export default FoodItems;