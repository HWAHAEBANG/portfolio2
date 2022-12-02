import React from "react";
import styles from "./Page6.module.css";
import { useInView } from "react-intersection-observer";
import Rotatebee from "../components/ui/Rotatebee";

export default function Page6() {
  const { ref: page6Ref, inView: page6IsVisible /* entry */ } = useInView();
  return (
    <div
      className={`${styles.bee_container} ${
        page6IsVisible ? styles.motion : ""
      }`}
      ref={page6Ref}
    >
      <Rotatebee text={"테스트"} top={82} src={"html"} />
      <Rotatebee text={"테스트"} top={247} src={"css"} />
      <Rotatebee text={"테스트"} top={412} src={"javascript"} />

      <Rotatebee text={"테스트"} top={0} left={148} src={"reactjs"} />
      <Rotatebee text={"테스트"} top={165} left={148} src={"typescript"} />
      <Rotatebee text={"테스트"} top={330} left={148} src={"jquery"} />
      <Rotatebee text={"테스트"} top={495} left={148} src={"bootstrap"} />

      <Rotatebee text={"테스트"} top={82} left={296} src={"tailwind"} />
      <Rotatebee text={"테스트"} top={247} left={296} src={"nodejs"} />
      <Rotatebee text={"테스트"} top={412} left={296} src={"firebase"} />

      <Rotatebee text={"테스트"} top={0} left={444} src={"amazon"} />
      <Rotatebee text={"테스트"} top={165} left={444} src={"netlify"} />
      <Rotatebee text={"테스트"} top={330} left={444} src={"docker"} />
      <Rotatebee text={"테스트"} top={495} left={444} src={"git"} />

      <Rotatebee text={"테스트"} top={82} left={592} src={"github"} />
      <Rotatebee text={"테스트"} top={247} left={592} src={"slack"} />
      <Rotatebee text={"테스트"} top={412} left={592} src={"notion"} />
    </div>
  );
}
