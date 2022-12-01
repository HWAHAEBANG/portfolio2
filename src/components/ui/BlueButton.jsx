import React from "react";
import styles from "./BlueButton.module.css";

export default function BlueButton({ text, check }) {
  const handleClick = () => {
    check === false && window.alert("개인정보 수집 내용에 동의해주세요");
  };

  return (
    <button
      className={`${styles.button} ${check ? "" : styles.checked}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
