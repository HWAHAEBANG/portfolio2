import React from "react";
import styles from "./Page2.module.css";
import { useInView } from "react-intersection-observer";

export default function Page2() {
  const { ref: page2Ref, inView: page2IsVisible /* entry */ } = useInView();
  return <div></div>;
}
