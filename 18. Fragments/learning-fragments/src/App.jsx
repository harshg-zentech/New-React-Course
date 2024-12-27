import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  let foodItems = [];
  // let foodItems= ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  let emptyMessage = !foodItems?.length ? <h3>I am still hungry!</h3> : null;

  // if (!foodItems.length) {
  //   return (
  //     <h3>I am still hungry!</h3>
  //   )
  // }

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      {!foodItems?.length && emptyMessage}
      <ul className="list-group">
        {foodItems.map((foodItem) => (
          <li key={foodItem} className="list-group-item">{foodItem}</li>
        ))}
      </ul>
    </>
  );
}

export default App
