import { useState } from 'react';
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
      </div>
    </>
  )
}

export default App
