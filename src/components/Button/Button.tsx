"use client";

import React from "react";

import styles from "./Button.module.scss";
import { clsx } from "utils/functions";

type Props = {
  className?: string;
  onClick: () => void;
  title: string;
};

function Button(props: Props) {
  const { className = "", onClick, title = "" } = props;

  return (
    <button
      className={clsx(styles["button"], styles[className])}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
