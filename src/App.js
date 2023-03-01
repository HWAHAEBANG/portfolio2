import { useState, useEffect, useRef } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";

import Page1 from "./pages/Page1"; // 버그수정 완료
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";

const filters = ["INTRO", "ABOUT", "STACKS", "PORTFOLIO", "CONTACT"];
const DIVIDER_HEIGHT = 0;

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      // console.log(e);
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          // console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          // console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          // console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          // console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
          /////////////
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          // 현재 5페이지
          // console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
          // 현재 6페이지
          // console.log("현재 6페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 6 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        } else if (scrollTop >= pageHeight * 6 && scrollTop < pageHeight * 7) {
          // 현재 7페이지
          // console.log("현재 7페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 7 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(7);
        } else if (scrollTop >= pageHeight * 7 && scrollTop < pageHeight * 8) {
          // 현재 8페이지
          // console.log("현재 8페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 8 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(8);
        } else {
          // 현재 9페이지
          // console.log("현재 9페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 9 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(8);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          // console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          // console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(0);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          // console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
          // 현재 4페이지
          // console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
          ////////////
        } else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          // 현재 5페이지
          // console.log("현재 5페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
          // 현재 6페이지
          // console.log("현재 6페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight * 6 && scrollTop < pageHeight * 7) {
          // 현재 7페이지
          // console.log("현재 7페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else if (scrollTop >= pageHeight * 7 && scrollTop < pageHeight * 8) {
          // 현재 8페이지
          // console.log("현재 8페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 6 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(6);
        } else {
          // 현재 9페이지
          // console.log("현재 9페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 7 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(7);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  useEffect(() => {
    setFilter(filters[Math.floor(scrollIndex / 2)]);
    console.log(scrollIndex);
  }, [scrollIndex]);
  console.log(filter);

  // filters.value 클릭시 해당 div로 이동하는 기능
  const handleClick = (e) => {
    // console.log(e);
    let text = e.target.firstChild.data;
    let index = filters.indexOf(text) * 2;

    const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

    outerDivRef.current.scrollTo({
      top: pageHeight * index + DIVIDER_HEIGHT * 2,
      left: 0,
      behavior: "smooth",
    });
    setScrollIndex(index);
  };

  return (
    <>
      <Popup />
      <div ref={outerDivRef} className='outer'>
        <Navbar filters={filters} filter={filter} onClick={handleClick} />
        {/* <Dots /> */}
        <section className='inner page1'>
          <Page1 scrollIndex={scrollIndex} />
        </section>
        <section className='inner page2'>
          <Page2 />
        </section>
        <section className='inner page3'>
          <Page3 />
        </section>
        <section className='inner page4'>
          <Page4 />
        </section>
        <section className='inner page5'>
          <Page5 />
        </section>
        <section className='inner page6'>
          <Page6 />
        </section>
        <section className='inner page7'>
          <Page7 />
        </section>
        <section className='inner page8'>
          <Page8 />
        </section>
        <section className='inner page9'>
          <Page9 />
        </section>
      </div>
    </>
  );
}

export default App;
