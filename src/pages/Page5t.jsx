import React from "react";
import styles from "./Page5.module.css";
import { useInView } from "react-intersection-observer";

export default function Page5() {
  const { ref: page5Ref, inView: page5IsVisible /* entry */ } = useInView();
  return (
    <>
      <h1 className={styles.page5_title}>
        Stack(갈아엎고 다음 슬라이드를 메인으로 쓸 예정)
      </h1>
      <img
        className={styles.obj2_1}
        src='/images/main-object2.png'
        alt='obj1'
      />
      <img
        className={styles.obj2_2}
        src='/images/main-object2.png'
        alt='obj1'
      />
      <div className={styles.stackcontainer}>
        <div ref={page5Ref} className={page5IsVisible ? styles.animateup1 : ""}>
          <div>
            <h3>Frontend</h3>
            <img src='/images/front.png' alt='front' />
          </div>
        </div>
        <div ref={page5Ref} className={page5IsVisible ? styles.animateup2 : ""}>
          <div>
            <h3>Backend</h3>
            <img src='/images/back.png' alt='back' />
          </div>
          <div>
            <h3>Mobile App</h3>
            <img src='/images/app.png' alt='app' />
          </div>
        </div>
        <div ref={page5Ref} className={page5IsVisible ? styles.animateup3 : ""}>
          <div>
            <h3>Deployment</h3>
            <img src='/images/deployment.png' alt='deployment' />
          </div>
          <div>
            <h3>Version Control</h3>
            <img src='/images/version.png' alt='version' />
          </div>
        </div>
        <div ref={page5Ref} className={page5IsVisible ? styles.animateup4 : ""}>
          <div>
            <h3>Communication</h3>
            <img src='/images/communication.png' alt='communication' />
          </div>
          <div>
            <h3>Certificate</h3>
            <img src='/images/certificate.png' alt='certificate' />
          </div>
        </div>
      </div>
    </>
  );
}
