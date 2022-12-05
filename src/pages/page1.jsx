import React, { useEffect } from "react";
import styles from "./Page1.module.css";
import ReactPlayer from "react-player";
import Typewriter from "react-ts-typewriter";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useInView } from "react-intersection-observer";
import toast, { Toaster } from "react-hot-toast";

export default function Page1({ scrollIndex }) {
  const { ref: page1Ref, inView: page1IsVisible /* entry */ } = useInView();
  const notify = () =>
    toast(
      (t) => (
        <span>
          이 페이지는 ReactJS로 제작되었습니다.
          <br />
          <b>제작 과정이 궁금하시다면 버튼을 클릭해주세요</b>
          <a
            href='https://www.notion.so/REACT-Portfolio-56b64ea41af147bf96922fc5b9a014da'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button
              // onClick={() => toast.dismiss(t.id)}
              style={{ marginLeft: "10px", padding: "1px 10px" }}
            >
              자세히 보기
            </button>
          </a>
        </span>
      ),
      {
        position: "bottom-left",
        style: { maxWidth: "5000px", width: "550px", fontSize: "20px" },
        duration: 8000,
      }
    );

  useEffect(() => {
    if (page1IsVisible) {
      notify();
    }
  }, [page1IsVisible]);

  return (
    <>
      <ReactPlayer
        className={styles.react_player}
        url={process.env.PUBLIC_URL + "/videos/beehouse3.mp4"}
        height='150vh'
        width='auto'
        playing={scrollIndex < 3 ? true : false}
        controls={false}
        loop={true}
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
              loop={true}
              speed={100}
              delay={3000}
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
      <Toaster style={{}} position='bottom-center' />
    </>
  );
}
