"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import styles from "./AboutUs.module.scss";

import Wave from "/public/assets/waves/wave.svg";
import { Texts } from "utils/types/init";
import { clsx } from "utils/functions";

type Props = {
  texts: Texts;
};

function AboutUs({ texts }: Props) {
  const [top, setTop] = useState(0);

  useLayoutEffect(() => {
    getTop();

    window.addEventListener("resize", getTop, true);
    return () => {
      window.removeEventListener("resize", getTop, true);
    };
  }, []);

  function getTop() {
    const sceenWidth = window.innerWidth;
    setTop(-sceenWidth / 5);
  }

  return (
    <div className={styles["about-us-section"]}>
      <div
        className={clsx(styles["wave"], top ? styles["in"] : "")}
        style={{ top: top }}
      >
        <img src={Wave.src} alt="wave" />
      </div>

      <h6 className={styles["title"]}>{texts.aboutUs_title}</h6>
      <p className={styles["content"]}>{texts.aboutUs_content}</p>
    </div>
  );
}

export default AboutUs;
