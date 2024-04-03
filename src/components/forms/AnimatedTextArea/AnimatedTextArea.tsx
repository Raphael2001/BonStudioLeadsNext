import React, { ChangeEventHandler, useState } from "react";

import styles from "./AnimatedTextArea.module.scss";
import AnimatedPlaceholder from "components/Basic/AnimatedPlaceholder/AnimatedPlaceholder";
import BasicTextArea from "components/Basic/BasicTextArea/BasicTextArea";
import BasicInputErrrorMsg from "components/Basic/BasicInputErrrorMsg/BasicInputErrrorMsg";

type Props = {
  value: string | number;
  onChange: ChangeEventHandler;
  name?: string;
  id?: string;
  placeholder?: string;
  disabled?: boolean;

  onFocus?: () => void;
  onBlur?: () => void;

  className?: string;
  rows?: number;
  showError?: boolean;
  errorMessage?: string;
};

function AnimateTextArea(props: Props) {
  const {
    value,
    onChange,
    id = "",
    name = "",
    placeholder = "",
    disabled = false,
    onFocus = () => {},
    onBlur = () => {},
    className = "",
    showError = false,
    errorMessage = "",
    rows = 1,
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  function onFocusHandler() {
    setIsFocus(true);
    typeof onFocus === "function" && onFocus();
  }
  function onBlurHandler() {
    setIsFocus(false);
    typeof onBlur === "function" && onBlur();
  }

  const isAnimated = !!value || isFocus;

  return (
    <div className={`${styles["animated-textarea-wrapper"]} ${className} `}>
      <BasicTextArea
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        disabled={disabled}
        rows={rows}
      />
      <AnimatedPlaceholder
        id={id}
        placeholder={placeholder}
        isAnimated={isAnimated}
        isFocus={isFocus}
      />
      <BasicInputErrrorMsg showError={showError} errorMessage={errorMessage} />
    </div>
  );
}

export default AnimateTextArea;
