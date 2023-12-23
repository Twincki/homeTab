import styles from "./Time.module.scss";
import React, { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <>
      <div className={styles.wrap}>
        <span className={styles.Minutes}>{hours}</span>
        <span className={styles.colonHours}>:</span>
        <span className={styles.Minutes}>{minutes}</span>
        <span className={styles.colonMinutes}>:</span>
        <span className={styles.seconds}>{seconds}</span>
      </div>
    </>
  );
}

export default Time;
