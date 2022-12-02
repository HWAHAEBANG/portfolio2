import React from "react";
import styles from "./Page8.module.css";
import { useInView } from "react-intersection-observer";

export default function Page8() {
  const { ref: page8Ref, inView: page8IsVisible /* entry */ } = useInView();
  return <div></div>;
}
