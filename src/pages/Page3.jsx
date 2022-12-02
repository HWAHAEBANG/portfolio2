import React from "react";
import styles from "./Page3.module.css";
import { useInView } from "react-intersection-observer";

export default function Page3() {
  const { ref: page3Ref, inView: page3IsVisible /* entry */ } = useInView();
  return (
    <>
      {" "}
      <div className={styles.profile_container}>
        <h1 className={styles.page3_title}>About me</h1>

        <img className={styles.profile} src='/images/HHB.jpg' alt='HHB' />
        <p
          ref={page3Ref}
          className={`${styles.introduce1} ${
            page3IsVisible ? styles.animateleft : ""
          }`}
        >
          저는<span>&nbsp;긍정적인&nbsp;</span>프론트엔드 개발자
          <br />
          <span>방충림&nbsp;</span>입니다.
        </p>
        <img
          className={styles.obj1}
          src='/images/main-object1.png'
          alt='obj1'
        />
        <img
          className={styles.obj1line}
          src='/images/main-object1-line.png'
          alt='obj1-line'
        />
        <p
          ref={page3Ref}
          className={`${styles.introduce2} ${
            page3IsVisible ? styles.animateright : ""
          }`}
        >
          내 앞에 어려움이 닥쳐와도 긍정적인 마인드와 문제를 해결하고자 하는
          마인드만 있다면 무슨일이든 해결할 수 있다고 생각합니다.
          <br />
          그 마인드를 가지고 제가 맡은바 역할을 완성해나가겠습니다.
          <br />
          어려운 것, 잘 모르는 것, 시도해보지 않았던 것을 겁먹지 않고 차근차근
          해결해나가며 내 것으로 만들어 나가겠습니다.
          <br />
          <br />
          <span className={styles.introduce3}>
            배움은 끝이 없다는 말처럼 당장 내 앞에 있는 것만 보지 않고 앞으로
            나아가기 위해 끊임없이 연구, 노력하겠습니다.
          </span>
        </p>
      </div>
    </>
  );
}
