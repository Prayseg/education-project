import { useState } from "react";

import styles from "./Counter.module.scss"

import './Counter.module.scss';


export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementHandler = () => {
    setCount((prevState) => {
      return prevState + 1;
    })
  }
  const onDecrementHandler = () => {
    setCount((prevState) => {
      return prevState - 1;
    })
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.button} onClick={onIncrementHandler}>increment</button>
      <button className={styles.button} onClick={onDecrementHandler}>decrement</button>
    </div>
  )
}
