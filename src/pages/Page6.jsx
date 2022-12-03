import React from "react";
import styles from "./Page6.module.css";
import { useInView } from "react-intersection-observer";
import Rotatebee from "../components/ui/Rotatebee";

export default function Page6() {
  const { ref: page6Ref, inView: page6IsVisible /* entry */ } = useInView();
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <h1 className={styles.page6_title}>Stack</h1>
        <p></p>
        <div></div>
        <p className={styles.certificate}>Certificate</p>
        <p className={styles.certificate_text}>
          <br />
          <span className={styles.certificate_title}>정보처리기사</span>
          <br />
          &nbsp;&nbsp;취득일 : 2021-11-26
          <br />
          &nbsp;&nbsp;구분 : 국가 기술 자격
          <br />
          &nbsp;&nbsp;발급기관 : 과학기술정보통신부
          <br />
          <br />
          <span className={styles.certificate_title}>네트워크 관리사 2급</span>
          <br />
          &nbsp;&nbsp;취득일 : 2021-01-14 <br />
          &nbsp;&nbsp;구분 : 국가 공인 IT자격
          <br />
          &nbsp;&nbsp;발급기관 : 한국정보통신자격협회
        </p>
      </div>
      <div
        className={`${styles.bee_container} ${
          page6IsVisible ? styles.motion : ""
        }`}
        ref={page6Ref}
      >
        <div className={styles.popup}>마우스 커서를 올려보세요</div>
        <Rotatebee top={82} src={"html"} text={"HTML"} limit={80} />
        <Rotatebee top={247} src={"css"} text={"CSS"} limit={80} />
        <Rotatebee
          top={412}
          src={"javascript"}
          text={"JavaScript"}
          limit={70}
        />

        <Rotatebee
          top={0}
          left={148}
          src={"reactjs"}
          text={"ReatJS"}
          limit={80}
        />
        <Rotatebee
          top={165}
          left={148}
          src={"typescript"}
          text={"TypeScript"}
          limit={50}
        />
        <Rotatebee
          top={330}
          left={148}
          src={"jquery"}
          text={"jQuery"}
          limit={60}
        />
        <Rotatebee
          top={495}
          left={148}
          src={"bootstrap"}
          text={"Bootstrap"}
          limit={40}
        />

        <Rotatebee
          top={82}
          left={296}
          src={"tailwind"}
          text={"Tailwind"}
          limit={70}
        />
        <Rotatebee
          top={247}
          left={296}
          src={"nodejs"}
          text={"NodeJS"}
          limit={30}
        />
        <Rotatebee
          top={412}
          left={296}
          src={"firebase"}
          text={"Firebase"}
          limit={50}
        />

        <Rotatebee
          top={0}
          left={444}
          src={"amazon"}
          text={"amazon"}
          limit={50}
        />
        <Rotatebee
          top={165}
          left={444}
          src={"netlify"}
          text={"Netlify"}
          limit={70}
        />
        <Rotatebee
          top={330}
          left={444}
          src={"docker"}
          text={"Docker"}
          limit={40}
        />
        <Rotatebee top={495} left={444} src={"git"} text={"Git"} limit={60} />

        <Rotatebee
          top={82}
          left={592}
          src={"github"}
          text={"Github"}
          limit={80}
        />
        <Rotatebee
          top={247}
          left={592}
          src={"slack"}
          text={"Slack"}
          limit={60}
        />
        <Rotatebee
          top={412}
          left={592}
          src={"notion"}
          text={"Notion"}
          limit={80}
        />
      </div>
    </div>
  );
}
