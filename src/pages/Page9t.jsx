import React from "react";
import styles from "./Page9.module.css";
import { useInView } from "react-intersection-observer";
import SendEmail from "../components/SendEmail";
import BlueButton from "../components/ui/BlueButton";

export default function Page9() {
  const { ref: page9Ref, inView: page9IsVisible /* entry */ } = useInView();
  return (
    <>
      <img className={styles.obj3} src='/images/main-object3.png' alt='obj3' />
      <div className={styles.contactcontainer}>
        <div
          className={`${styles.contact} ${page9IsVisible ? styles.motion : ""}`}
          ref={page9Ref}
        >
          <h1 className={styles.page9_title}>Contact</h1>
          <p>
            아직 많이 부족한 저의 포트폴리오를 봐주셔서 감사합니다.
            <br />
            저에게 궁금한 점이 있으시면 연락 주시기 바랍니다.
            <br />
            연락주시면 3일 이내 회신드리겠습니다. 감사합니다.
          </p>
          <div className={styles.infocontainer}>
            <div className={styles.info}>
              <p>
                E-mail : bcl0206@gmail.com
                <br />
                phone : 010 4950 1181
                <br />
                SNS : ch__ng3 (instagram)
                <br />
                Portfolio : HHB.com
              </p>
            </div>
            <div className={styles.qrcontainer}>
              <p>KakaoTalk</p>
              <img
                className={styles.qrcode}
                src='/images/kakaoqr.png'
                alt='QRcode'
              />
            </div>
          </div>
          <a href='test.pdf' download='test.pdf'>
            <BlueButton text={"RESUME DOWNLOAD"} />
          </a>
        </div>
        <div className={styles.sendemail}>
          <img
            src='/images/project1.png'
            alt='email'
            className={styles.emailImg}
          />
          <SendEmail />
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
        </p>
        <p>© Copyright 2023 HBB All Rights Reserved.</p>
      </footer>
    </>
  );
}
