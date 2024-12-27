import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems= [];
  let foodItems= ["Dal", "Sabzi", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // if (!foodItems.length) {
  //   return (
  //     <h3>I am still hungry!</h3>
  //   )
  // }

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage foodItems={foodItems} />
      <FoodItems foodItems={foodItems} />
    </>
  );
}

export default App
