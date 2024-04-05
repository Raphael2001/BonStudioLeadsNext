import React from "react";

import styles from "./Header.module.scss";
import { Media } from "utils/types/media";
import SmartMedia from "components/SmartMedia/SmartMedia";
type Props = {
  logo: Media;
};

function Header({ logo }: Props) {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <SmartMedia className={styles["logo"]} item={logo} />
      </div>
    </header>
  );
}

export default Header;
