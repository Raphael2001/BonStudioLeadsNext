"use client";
import React, { useEffect } from "react";

import styles from "./Header.module.scss";

import SmartMedia from "components/SmartMedia/SmartMedia";
import { useAppSelector } from "utils/hooks/useRedux";

function Header() {
  const logo = useAppSelector((store) => store.initApp.logo);
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <SmartMedia item={logo} skeletonClassName={styles["logo"]} />
      </div>
    </header>
  );
}

export default Header;
