"use client";

import React from "react";

import styles from "./RevalidateButton.module.scss";
import CmsButton from "components/CmsButton/CmsButton";
import useNotificationsHandler from "utils/hooks/useNotificationsHandler";

function RevalidateButton() {
  const { onSuccessNotification } = useNotificationsHandler();
  function revalidateSite() {
    fetch("/api/revalidate")
      .then((res) => res.json())
      .then((res) => {
        onSuccessNotification();
      });
  }
  return (
    <div className={styles["site-btn"]}>
      <CmsButton
        className={"update"}
        text={"עדכן את האתר"}
        onClick={revalidateSite}
      />
    </div>
  );
}

export default RevalidateButton;
