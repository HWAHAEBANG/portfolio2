import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import MotionPercentage from "../MotionPercentage";
import styles from "./Rotatebee.module.css";

export default function Rotatebee({
  top,
  right,
  bottom,
  left,
  src,
  text,
  limit,
  onOver,
}) {
  const { ref: page6Ref, inView: page6IsVisible /* entry */ } = useInView();
  const [start, setStart] = useState(false);

  // const handleOver = (e) => {
  //   // console.log(e);
  //   e.target.id === "only" && setExplain(e.target.firstChild.alt);
  //   // console.log(e.target.firstElementChild.outerText);
  // };
  return (
    <div
      className={`${styles.medal} ${page6IsVisible ? styles.motion : ""}`}
      style={{ top: top, right: right, bottom: bottom, left: left }}
      onMouseEnter={() => setStart(true)}
      onMouseLeave={() => setStart(false)}
      onMouseOver={onOver}
      ref={page6Ref}
    >
      <div className={styles.front} id='only'>
        <img
          className={styles.obj1}
          src={`/images/icons/fav_${src}.png`}
          alt={src}
        />
        <div className={styles.blink}></div>
      </div>
      <div className={styles.back}>
        <p className={styles.text}>{text}</p>
        <MotionPercentage limit={limit} start={start} />
        {/* <div className={styles.inner}></div> */}
        <div className={styles.blink}></div>
      </div>
    </div>
  );
}
