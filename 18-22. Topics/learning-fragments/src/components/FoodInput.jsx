import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
  return (
    <input type="text" name="food-input" id="foodInput" placeholder="Enter Food Item Here"
      className={styles['hg-custom-input']}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;