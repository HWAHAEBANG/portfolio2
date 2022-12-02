import React, { useState, useEffect, useRef } from "react";
import styles from "./Page1.module.css";
import ReactPlayer from "react-player";
import Typewriter from "react-ts-typewriter";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useInView } from "react-intersection-observer";

export default function Page1({ scrollIndex }) {
  const { ref: page1Ref, inView: page1IsVisible /* entry */ } = useInView();
  return (
    <>
      <ReactPlayer
        className={styles.react_player}
        url={process.env.PUBLIC_URL + "/videos/beehouse.mp4"}
        height='150vh'
        width='auto'
        // playing={true}
        controls={false}
        // loop={true}
        muted={true}
        style={{ filter: scrollIndex === 0 ? "none" : "blur(7px)" }}
      />
      <div className={styles.page1_text}>
        <h2 ref={page1Ref}>
          {page1IsVisible ? (
            <Typewriter
              text={
                "　　혁신적인 아이디어 창출과　　　 지속가능한 성장을 하는 개발자"
              }
              // loop={true}
              speed={100}
            />
          ) : (
            ""
          )}
          <br />
        </h2>
      </div>
      <div className={styles.arrow_container}>
        <RxDoubleArrowDown className={styles.arrow} />
        <p>화면을 스크롤 하여 내려주세요</p>
      </div>
    </>
  );
}
