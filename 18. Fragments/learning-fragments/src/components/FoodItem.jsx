import styles from "./FoodItem.module.css"

const FoodItem = ({ foodItem }) => {
  return (
    <li className={`list-group-item ${styles['hg-custom-item']}`}>
      <span className={styles['hg-custom-span']}>{foodItem}</span>
      </li>
  );
};

export default FoodItem;