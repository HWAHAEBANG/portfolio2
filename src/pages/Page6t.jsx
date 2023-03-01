import React, { useEffect, useState } from "react";
import styles from "./Page6.module.css";
import { useInView } from "react-intersection-observer";
import Rotatebee from "../components/ui/Rotatebee";
import toast, { Toaster } from "react-hot-toast";

export default function Page6() {
  const { ref: page6Ref, inView: page6IsVisible /* entry */ } = useInView();
  const notify = () =>
    toast("스택 아이콘에 마우스 커서를 올려보세요", {
      duration: 4000,
      position: "bottom-right",

      // Styling
      style: {
        maxWidth: "420px",
        width: "420px",
        fontSize: "20px",
        fontWeight: "700",
      },
      className: "",

      // Custom Icon
      icon: "😉",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  console.log(page6IsVisible);

  useEffect(() => {
    if (page6IsVisible) {
      notify();
    }
  }, [page6IsVisible]);

  ////test
  const [explain, setExplain] = useState("Mouse over");
  const handleOver = (e) => {
    // console.log(e);
    e.target.id === "only" && setExplain(e.target.firstChild.alt);
    // console.log(e.target.firstElementChild.outerText);
  };

  //⚠⚠⚠ 아이콘 호버했을 떄, text 업데이트가 종종 반응하지 않는 버그가 있음 개선 필요!!!!
  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <h1 className={styles.page6_title}>Stack</h1>
        <div className={styles.explain_container}>
          <p className={styles.explain_title}>{`" ${explain} "`}</p>
          <div className={styles.explain_text}>
            {(() => {
              switch (explain) {
                case "html":
                  return (
                    <p>
                      웹페이지의 기본적인 골격과 HTML태그의 다양한 활용법을
                      이용하고 있으며, 레이아웃을 파악하고 의도에 맞게 구성하는
                      것이 가능합니다.
                    </p>
                  );
                case "css":
                  return (
                    <p>
                      다양한 효과들을 사용할 수 있으며, 코드를 보다 일관성 있고,
                      깔씀하게 작성할 수 있습니다. 주로 postCSS를 활용하여
                      관련한 프로젝트에 숙련도가 높습니다.
                    </p>
                  );
                case "javascript":
                  return (
                    <p>
                      JavaScript의 문법에 대하여 심도있게 이해해고 있으며, ES6의
                      새로운 기술을 활용하여 효율적인 코드를 구현할 수 있습니다.
                    </p>
                  );
                case "reactjs":
                  return (
                    <p>
                      가장 주로 사용하는 라이브러리로 숙련도가 매우 높습니다.
                      ReactRucter, Context, tanStack 라이브러리를 추가로
                      활용하여, 효율적인 페이지를 구성할 수 있습니다.
                    </p>
                  );
                case "typescript":
                  return (
                    <p>
                      아직 해보질 않아서 뭐라고 말할 수 없는데, 대충 어느정도
                      수준까지는 한다 정도로 작성할 예정입니다.
                    </p>
                  );
                case "jquery":
                  return (
                    <p>
                      jquey의 원리와 작동방식에 대해서 이해하고 있으며, 오래된
                      페이지 유지보수 작업 정도는 제한이 없습니다.
                    </p>
                  );
                case "bootstrap":
                  return (
                    <p>bootstrap도 아직 해보질 않아서 뭐라고 말을 못하겠네.</p>
                  );
                case "tailwind":
                  return (
                    <p>
                      tailwind를 사용하여 프로젝트를 완성해본 경험이 있으며, 잘
                      할 수 있습니당.
                    </p>
                  );
                case "nodejs":
                  return (
                    <p>
                      기본적인 수준에서 서버를 구성하고 프론트엔드와 통신을 할
                      수있습니다.
                    </p>
                  );
                case "firebase":
                  return (
                    <p>
                      firebase를 활용하여 간단한 서버를 구성하고, 운용할 수
                      있습니다.
                    </p>
                  );
                case "amazon":
                  return (
                    <p>
                      amazon을 이용하여 주로 배포를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                case "netlify":
                  return (
                    <p>
                      netlify을 이용하여 주로 배포를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                case "docker":
                  return (
                    <p>
                      docker을 이용하여 주로 배포를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                case "git":
                  return (
                    <p>
                      git을 이용하여 주로 버전관리를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                case "github":
                  return (
                    <p>
                      github을 이용하여 주로 버전관리를 하며, 사용법이
                      친숙합니당.
                    </p>
                  );
                case "slack":
                  return (
                    <p>
                      slack을 이용하여 주로 협업를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                case "notion":
                  return (
                    <p>
                      notion을 이용하여 주로 협업를 하며, 사용법이 친숙합니당.
                    </p>
                  );
                default:
                  <p>
                    스택 아이콘에 마우스 커서를 올리시면 상세 설명을 보실 수
                    있습니다.
                  </p>;
                  return;
              }
            })()}
          </div>
        </div>
        <p className={styles.certificate}>Certificate</p>
        <p className={styles.certificate_text}>
          <br />
          <span className={styles.certificate_title}>정보처리기사</span>
          <br />
          &nbsp;- 취득일 : 2021-11-26
          <br />
          &nbsp;- 구분 : 국가 기술 자격
          <br />
          &nbsp;- 발급기관 : 과학기술정보통신부
          <br />
          <br />
          <span className={styles.certificate_title}>네트워크 관리사 2급</span>
          <br />
          &nbsp;- 취득일 : 2021-01-14 <br />
          &nbsp;- 구분 : 국가 공인 IT자격
          <br />
          &nbsp;- 발급기관 : 한국정보통신자격협회
        </p>
      </div>
      <div
        className={`${styles.bee_container} ${
          page6IsVisible ? styles.motion : ""
        }`}
        ref={page6Ref}
      >
        <Rotatebee
          top={82}
          src={"html"}
          text={"HTML"}
          limit={80}
          onOver={handleOver}
        />
        <Rotatebee
          top={247}
          src={"css"}
          text={"CSS"}
          limit={80}
          onOver={handleOver}
        />
        <Rotatebee
          top={412}
          src={"javascript"}
          text={"JavaScript"}
          limit={70}
          onOver={handleOver}
        />

        <Rotatebee
          top={0}
          left={148}
          src={"reactjs"}
          text={"ReatJS"}
          limit={80}
          onOver={handleOver}
        />
        <Rotatebee
          top={165}
          left={148}
          src={"typescript"}
          text={"TypeScript"}
          limit={50}
          onOver={handleOver}
        />
        <Rotatebee
          top={330}
          left={148}
          src={"jquery"}
          text={"jQuery"}
          limit={60}
          onOver={handleOver}
        />
        <Rotatebee
          top={495}
          left={148}
          src={"bootstrap"}
          text={"Bootstrap"}
          limit={40}
          onOver={handleOver}
        />

        <Rotatebee
          top={82}
          left={296}
          src={"tailwind"}
          text={"Tailwind"}
          limit={70}
          onOver={handleOver}
        />
        <Rotatebee
          top={247}
          left={296}
          src={"nodejs"}
          text={"NodeJS"}
          limit={30}
          onOver={handleOver}
        />
        <Rotatebee
          top={412}
          left={296}
          src={"firebase"}
          text={"Firebase"}
          limit={50}
          onOver={handleOver}
        />

        <Rotatebee
          top={0}
          left={444}
          src={"amazon"}
          text={"amazon"}
          limit={50}
          onOver={handleOver}
        />
        <Rotatebee
          top={165}
          left={444}
          src={"netlify"}
          text={"Netlify"}
          limit={70}
          onOver={handleOver}
        />
        <Rotatebee
          top={330}
          left={444}
          src={"docker"}
          text={"Docker"}
          limit={40}
          onOver={handleOver}
        />
        <Rotatebee
          top={495}
          left={444}
          src={"git"}
          text={"Git"}
          limit={60}
          onOver={handleOver}
        />

        <Rotatebee
          top={82}
          left={592}
          src={"github"}
          text={"Github"}
          limit={80}
          onOver={handleOver}
        />
        <Rotatebee
          top={247}
          left={592}
          src={"slack"}
          text={"Slack"}
          limit={60}
          onOver={handleOver}
        />
        <Rotatebee
          top={412}
          left={592}
          src={"notion"}
          text={"Notion"}
          limit={80}
          onOver={handleOver}
        />
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
}
