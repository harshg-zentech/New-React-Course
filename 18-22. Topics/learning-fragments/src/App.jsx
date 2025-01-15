import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems= [];
  // let foodItems= ["Dal", "Sabzi", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  let [ foodItems, setFoodItemsState ] = useState([]);

  // if (!foodItems.length) {
  //   return (
  //     <h3>I am still hungry!</h3>
  //   )
  // }

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItemsState(newFoodItems);
      console.log("Food value entered by the user: ", newFoodItem);
      event.target.value = "";
    }
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </Container>

      {/* <Container>
        <p>Above is the list of the healthy food items which are good for health and well being.</p>
      </Container> */}
    </>
  );
}

export default App
