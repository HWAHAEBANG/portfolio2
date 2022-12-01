import React from "react";
import styles from "./GoldButton.module.css";

export default function GoldButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}
