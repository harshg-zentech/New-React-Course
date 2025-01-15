import styles from './ButtonsContainer.module.css'

const ButtonsContainer = () => {
  const buttonNames = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', 'C', '/', '='];

  return (
    <div className={styles.buttonsContainer}>

      {buttonNames.map((buttonName) => (
        <button type="button" key={buttonName} className={styles.button}>{buttonName}</button>
      ))}

    </div>
  );
}

export default ButtonsContainer;