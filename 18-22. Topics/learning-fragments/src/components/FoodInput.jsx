import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <input type="text" name="food-input" id="foodInput" placeholder="Enter Food Item Here"
      className={styles['hg-custom-input']}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;