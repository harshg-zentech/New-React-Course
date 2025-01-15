import styles from "./FoodItem.module.css"

const FoodItem = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`${styles['hg-custom-item']} list-group-item`}>
      <span className={styles['hg-custom-span']}>{foodItem}</span>
      <button 
        className={`${styles['hg-custom-button']} btn btn-info`} 
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default FoodItem;