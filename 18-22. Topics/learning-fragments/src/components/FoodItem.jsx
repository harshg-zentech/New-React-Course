import styles from "./FoodItem.module.css"

const FoodItem = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    
    console.log(`${foodItem} being bought`);
  }

  return (
    <li className={`${styles['hg-custom-item']} list-group-item`}>
      <span className={styles['hg-custom-span']}>{foodItem}</span>
      <button 
        className={`${styles['hg-custom-button']} btn btn-info`} 
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default FoodItem;