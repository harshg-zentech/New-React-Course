import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems= [];
  let foodItems= ["Dal", "Sabzi", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  // if (!foodItems.length) {
  //   return (
  //     <h3>I am still hungry!</h3>
  //   )
  // }

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
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
