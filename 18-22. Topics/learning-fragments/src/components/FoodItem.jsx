import styles from "./FoodItem.module.css"

const FoodItem = ({ foodItem }) => {
  return (
    <li className={`${styles['hg-custom-item']} list-group-item`}>
      <span className={styles['hg-custom-span']}>{foodItem}</span>
      </li>
  );
};

export default FoodItem;