import React, { useState } from "react";
import styles from "./Popup.module.css";
import { RiCloseLine } from "react-icons/ri";

export default function Popup() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={`${styles.popup_background} ${
        visible ? "" : styles.disappeared
      }`}
    >
      <div className={styles.popup}>
        <RiCloseLine className={styles.closeBtn} onClick={handleClose} />
        <p className={styles.greeting}>
          <span className={styles.point1}>포트폴리오</span>에<br />
          오신 것을 환영합니다!
        </p>
        <div className={styles.main_img_container}>
          <img src='/images/HHB.jpg' alt='HHB' className={styles.main_img} />
        </div>
        <p className={styles.text_line1}>
          섬세함을 바탕으로 사용자 친화적인 UI를 구축하는
        </p>
        <p className={styles.text_line2}>
          프론트엔드 개발자<span className={styles.point2}> 방충림</span>입니다.
        </p>
        <div className={styles.input_container}>
          <input type='checkbox' id='checkbox' className={styles.checkbox} />
          <label htmlFor='checkbox' className={styles.label}>
            오늘 하루 더이상 보지 않기
          </label>
        </div>
      </div>
    </div>
  );
}
