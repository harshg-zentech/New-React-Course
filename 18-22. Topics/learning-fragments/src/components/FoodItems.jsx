import { useState } from "react";
import FoodItem from "./FoodItem";

const FoodItems = ({ foodItems }) => {
  let [activeFoodItems, setActiveFoodItems] = useState([]);

  let onBuyButton = (foodItem, event) => {
    let newFoodItems = [...activeFoodItems,  foodItem];
    setActiveFoodItems(newFoodItems);
  }

  return (
    <ul className="list-group">
      {foodItems.map((foodItem) => (
        <FoodItem key={foodItem} foodItem={foodItem} bought={activeFoodItems.includes(foodItem)}
          handleBuyButton={() => onBuyButton(foodItem, event)}>
        </FoodItem>
      ))}
    </ul>
  )
};

export default FoodItems;