"use client";
import React from "react";

import styles from "./HomeBanner.module.scss";
import SmartMedia from "components/SmartMedia/SmartMedia";

import { useAppSelector } from "utils/hooks/useRedux";
import AppText from "components/AppText/AppText";
import useTranslate from "utils/hooks/useTranslate";

function BannerHome() {
  const homeBanner = useAppSelector((store) => store.initApp.homeBanner);

  const translate = useTranslate();

  return (
    <section className={styles["top-banner-section"]}>
      <SmartMedia
        skeletonClassName={styles["top-banner-bg-media"]}
        item={homeBanner}
      />
      <div className={styles["top-banner-media-overlay"]}>
        <div className={styles["titles"]}>
          <AppText
            className={styles["title"]}
            value={translate("homeBanner_title")}
          />
        </div>
        <AppText
          className={styles["address"]}
          value={translate("homeBanner_address_text")}
        />

        <a className={styles["leave-details-btn"]} href="#leads-form">
          {translate("leaveDetails_btn_text").text}
        </a>
      </div>
    </section>
  );
}

export default BannerHome;
