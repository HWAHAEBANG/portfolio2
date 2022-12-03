import React, { useEffect, useState } from "react";
import styles from "./MotionPercentage.module.css";

export default function MotionPercentage({ limit, start }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (start) {
      const num = setInterval(() => {
        setPercentage((prev) => prev + 1);
      }, 1);
      if (percentage === limit) {
        clearInterval(num);
      }
      return () => clearInterval(num);
    } else {
      setPercentage(0);
    }
  }, [percentage, start]);

  // console.log(start);

  return (
    <div className={styles.percentage}>
      {percentage}
      <span>%</span>
    </div>
  );
}
