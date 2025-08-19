import React from "react";
import styles from "./CounterButton.module.css";

function CounterButton({ onClick }: { onClick: () => void }) {
  console.log("CounterButton rendered");
  return (
    <button className={styles.button} onClick={onClick}>
      Увеличить
    </button>
  );
}

export default React.memo(CounterButton);
