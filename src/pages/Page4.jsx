import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../components/ui/Button";
import styles from "./Page4.module.css";

const projects = [
  "/images/project3.png",
  "/images/project4.png",
  "/images/project1.png",
  "/images/project2.png",
  "/images/project3.png",
  "/images/project4.png",
  "/images/project1.png",
  "/images/project2.png",
];

export default function Page4({}) {
  /* test */
  const [check, setCheck] = useState(2);

  // console.log(projects[che]);
  /* test */

  const [slidePx, setSlidePx] = useState(1500);

  const toPrev = () => {
    setCheck((prev) => prev - 1);
    slidePx <= 2500 && setSlidePx(slidePx + 1000);
    setTimeout(() => {
      slidePx === 1500 && setSlidePx(-1500);
      slidePx === 1500 && setCheck(5);
    }, 300);
  };

  const toNext = () => {
    setCheck((prev) => prev + 1);
    slidePx >= -2500 && setSlidePx(slidePx - 1000);

    setTimeout(() => {
      slidePx === -1500 && setSlidePx(1500);
      slidePx === -1500 && setCheck(2);
    }, 300);
  };

  return (
    <div className={styles.mainBox}>
      <h1 className={styles.page4_title}>Portfolio</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={
              slidePx === 1500 || slidePx === -1500
                ? {
                    transform: `translateX(${slidePx}px)`,
                    // transition: "0s ease",
                  }
                : {
                    transform: `translateX(${slidePx}px)`,
                    transition: " all 0.5s ease",
                  }
            }
          >
            <img
              src={project}
              alt={index}
              style={
                index - 1 === check || index + 1 === check
                  ? { opacity: `0.4` }
                  : {}
              }
            />
            <div className={styles.hoverText}>
              {(() => {
                switch (index) {
                  case 2:
                    return (
                      <p>
                        딥디크는 프랑스 니치 향수 브랜드 1세대로 향수, 향초,
                        디퓨저, 스킨세어 제품, 인테리어 소품 등을 판매하는
                        브랜드 입니다. 딥디크는 처음부터 조향사가 아닌 디자이너,
                        화가, 건축가가 인테리어 관련 패브릭을 판매하기 위해
                        부티크로 만들었고 현재 향수로 확장하게 되어 현재는 향수
                        뿐만 아니라 다양한 제품들을 판매하고 있습니다. 이처럼
                        아티스트와 향수의 조합으로 디자인이 트렌디 하고 개성있는
                        브랜드로 남여노소 상관없이 많은 사람들에게 사랑받는
                        브랜드로 성장하였습니다.
                        <br />
                        <br />
                        <br />
                        프로젝트 구분 : 개인프로젝트(참여도 : 100%)
                        <br />
                        제작 기간 : 약 3주
                        <br />
                        사용 툴 : 비주얼 스튜디오 코드, 포토샵, 일러스트레이터
                        <br />
                        디자인 컨셉 : 라인 아이콘 사용, 타이포그래피 활용
                        <br />
                        가용 기기 : PC, 태플릿, 휴대폰
                        <br />
                        <br />
                        <br />
                        <Button text={"자세히 보기"} />
                      </p>
                    );
                  case 3:
                    return (
                      <p>
                        1983년 컨테이너 수송을 시작한 HMM은 100여 척의 다양한
                        선박과 물류시설, 전 세계를 연결하는 항로망, IT시스템,
                        숙련된 해운 전문 인력을 바탕으로 최고의 운송 서비스를
                        제공하는 종합 해운 물류기업입니다. HMM은 각종 수출입
                        제품은 물론, 원유, 석탄, 철광석, 특수화물 등
                        국가전략물자를 운송하여 국가 경제의 대동맥 역할을
                        수행하며, 대한민국 해운 재건과 국가 경쟁력 향상에
                        이바지하기 위한 대한민국 대표 국적선사의 역할을 성실히
                        수행하고 있습니다.
                        <br />
                        <br />
                        <br />
                        프로젝트 구분 : 개인프로젝트(참여도 : 100%)
                        <br />
                        제작 기간 : 약 3주
                        <br />
                        사용 툴 : 비주얼 스튜디오 코드, 포토샵, 일러스트레이터
                        <br />
                        디자인 컨셉 : 라인 아이콘 사용, 타이포그래피 활용
                        <br />
                        가용 기기 : PC, 태플릿, 휴대폰
                        <br />
                        <br />
                        <br />
                        <Button text={"자세히 보기"} />
                      </p>
                    );
                  case 4:
                    return (
                      <p>
                        동화약품은 대표적으로 소화제인 까스활명수, 상처치료제
                        후시딘, 종합감기약 판콜, 간장약 헬민 200 등의
                        일반의약품과 라코르, 록소닌, 메녹틸, 클자핀 등의
                        전문의약품을 만들고 있는 제약회사입니다. 동화약품은
                        122년 동안 같은 상호(동화)로 같은 제품(활명수)을
                        생산/판매하고 있는 기록을 가진 기업입니다. 현재 최장수
                        제조 회사이자 제약회사, 대한민국 최초의 등록상표
                        부채표와 최장수 의약품 활명수 4개 부문에서 기네스북에
                        등재되어 있는 국민 제약 회사 입니다.
                        <br />
                        <br />
                        <br />
                        프로젝트 구분 : 개인프로젝트(참여도 : 100%)
                        <br />
                        제작 기간 : 약 3주
                        <br />
                        사용 툴 : 비주얼 스튜디오 코드, 포토샵, 일러스트레이터
                        <br />
                        디자인 컨셉 : 라인 아이콘 사용, 타이포그래피 활용
                        <br />
                        가용 기기 : PC, 태플릿, 휴대폰
                        <br />
                        <br />
                        <br />
                        <Button text={"자세히 보기"} />
                      </p>
                    );
                  case 5:
                    return (
                      <p>
                        한국정보화진흥원에서 운영하고 있는 웹접근성연구소
                        홈페이지는 웹접근성과 관련된 지침과 정책 등을 소개 하고
                        있으며, 웹접근성을 고려한 콘텐츠 제작기법에 대한 방법과
                        실사례를 제공하고 웹접근성 관련 교육이나, 운영 웹
                        사이트에 대한 웹 접근성 개선 의지 및 개선 필요성이 높은
                        기관을 대상으로 웹 접근성 평가 및 소스코드 수정을 무료로
                        지원해 주는 웹접근성 개선 지원 사업을 실시하고 있습니다.
                        <br />
                        <br />
                        <br />
                        프로젝트 구분 : 개인프로젝트(참여도 : 100%)
                        <br />
                        제작 기간 : 약 3주
                        <br />
                        사용 툴 : 비주얼 스튜디오 코드, 포토샵, 일러스트레이터
                        <br />
                        디자인 컨셉 : 라인 아이콘 사용, 타이포그래피 활용
                        <br />
                        가용 기기 : PC, 태플릿, 휴대폰
                        <br />
                        <br />
                        <br />
                        <Button text={"자세히 보기"} />
                      </p>
                    );
                  default:
                    return;
                }
              })()}
            </div>
          </li>
        ))}
        <IoIosArrowBack
          className={styles.prevBtn}
          onClick={toPrev}
          // style={{ display: slidePx === 0 ? "none" : "" }}
        />

        <IoIosArrowForward
          className={styles.nextBtn}
          onClick={toNext}
          // style={{ display: slidePx === -4125 ? "none" : "" }}
        />
      </ul>
    </div>
  );
}
