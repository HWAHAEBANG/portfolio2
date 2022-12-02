import React from "react";
import styles from "./Rotatebee.module.css";

export default function Rotatebee({ top, right, bottom, left, text, src }) {
  return (
    <div
      className={styles.medal}
      style={{ top: top, right: right, bottom: bottom, left: left }}
    >
      <div className={styles.front}>
        <img
          className={styles.obj1}
          src={`/images/icons/fav_${src}.png`}
          alt={src}
        />
        <div className={styles.blink}></div>
      </div>
      <div className={styles.back}>
        {text}
        {/* <div className={styles.inner}></div> */}
        <div className={styles.blink}></div>
      </div>
    </div>
  );
}
