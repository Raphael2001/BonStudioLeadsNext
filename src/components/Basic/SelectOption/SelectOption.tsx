import React from "react";

import basic from "./SelectOption.module.scss";

type Props = {
  extraStyles?: any;
  text: string;
  query?: string;
  onOptionClick: () => void;
  index: number;
  name: string;
  isHighlighted?: boolean;
};

function SelectOption(props: Props) {
  const {
    extraStyles = {},
    query = "",
    text = "",
    onOptionClick,
    name,
    index,
    isHighlighted = false,
  } = props;

  function styles(className: string) {
    return (basic[className] || "") + " " + (extraStyles[className] || "");
  }

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return (
    <button
      className={`${styles("option")} ${
        isHighlighted ? styles("highlight") : ""
      }`}
      onClick={onOptionClick}
      data-index={`${name}_${index}`}
    >
      <span className={styles("option-text")}>
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === query.toLowerCase() ? styles("bold") : ""
            }
          >
            {part}
          </span>
        ))}
      </span>
    </button>
  );
}

export default SelectOption;
