import React from "react";
import styles from "./Page4.module.css";
import { useInView } from "react-intersection-observer";

export default function Page4() {
  const { ref: page4Ref, inView: page4IsVisible /* entry */ } = useInView();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Possibility</h3>
      <div className={styles.content}>
        <p className={styles.number}>01</p>
        <p className={styles.subject}>성실함</p>
        <div className={styles.guage_container}>
          <div
            className={`${styles.guage1} ${
              page4IsVisible ? "" : styles.active
            }`}
            ref={page4Ref}
          ></div>
          <p className={styles.text}>
            화장실 청소 하나를 하더라도 남들과 차별화되는 디테일함을 보여줍니다.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.number}>02</p>
        <p className={styles.subject}>책임감</p>
        <div className={styles.guage_container}>
          <div
            className={`${styles.guage2} ${
              page4IsVisible ? "" : styles.active
            }`}
            ref={page4Ref}
          ></div>
          <p className={styles.text}>
            워라벨이 집착하지 않기보다, 원하는 수준의 결과물이 나올 때 까지
            끝없이 고민합니다.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.number}>03</p>
        <p className={styles.subject}>커뮤니케이션</p>
        <div className={styles.guage_container}>
          <div
            className={`${styles.guage3} ${
              page4IsVisible ? "" : styles.active
            }`}
            ref={page4Ref}
          ></div>
          <p className={styles.text}>
            사람들과 소통하며 원활하게 관계를 유지할 수 있습니다.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.number}>04</p>
        <p className={styles.subject}>발전가능성</p>
        <div className={styles.guage_container}>
          <div
            className={`${styles.guage4} ${
              page4IsVisible ? "" : styles.active
            }`}
            ref={page4Ref}
          ></div>
          <p className={styles.text}>
            자기계발과 업무능력 향상에 여가시간을 할애하는 것을 선호합니다.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.number}>05</p>
        <p className={styles.subject}>적극적임</p>
        <div className={styles.guage_container}>
          <div
            className={`${styles.guage5} ${
              page4IsVisible ? "" : styles.active
            }`}
            ref={page4Ref}
          ></div>
          <p className={styles.text}>
            수동적인 업무 처리가 아닌, 조직의 목표를 자신의 목표와 동일시하여
            업무에 보다 적극적입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
