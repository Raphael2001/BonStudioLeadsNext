"use client";

import React from "react";

import styles from "./Button.module.scss";
import { clsx } from "utils/functions";

type Props = {
  className?: string;
  onClick: () => void;
  text: string;
};

function Button(props: Props) {
  const { className = "", onClick, text = "" } = props;

  return (
    <button className={clsx(styles["button"], className)} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
