"use client";
import React, { useLayoutEffect, useState } from "react";

import styles from "./AboutUs.module.scss";

import Wave from "/public/assets/waves/wave.svg";

import { clsx } from "utils/functions";
import useTranslate from "utils/hooks/useTranslate";
import AppText from "components/AppText/AppText";

function AboutUs() {
  const [top, setTop] = useState(0);

  const translate = useTranslate();

  useLayoutEffect(() => {
    getTop();

    window.addEventListener("resize", getTop, true);
    return () => {
      window.removeEventListener("resize", getTop, true);
    };
  }, []);

  function getTop() {
    const sceenWidth = window.innerWidth;
    setTop(-sceenWidth / 4.5);
  }

  return (
    <div className={styles["about-us-section"]}>
      <div
        className={clsx(styles["wave"], top ? styles["in"] : "")}
        style={{ top: top }}
      >
        <img src={Wave.src} alt="wave" />
      </div>

      <AppText className={styles["title"]} value={translate("aboutUs_title")} />
      <AppText
        className={styles["content"]}
        value={translate("aboutUs_content")}
      />
    </div>
  );
}

export default AboutUs;
