import React from "react";

import styles from "./HomeBanner.module.scss";
import SmartMedia from "components/SmartMedia/SmartMedia";
import { Media } from "utils/types/media";
import { Texts } from "utils/types/init";

type Props = {
  media: Media;
  texts: Texts;
};

function BannerHome(props: Props) {
  const { media, texts } = props;

  return (
    <section className={styles["top-banner-section"]}>
      <SmartMedia className={styles["top-banner-bg-media"]} item={media} />
      <div className={styles["top-banner-media-overlay"]}>
        <div className={styles["titles"]}>
          <h1 className={styles["title"]}>{texts.homeBanner_title}</h1>
        </div>

        <h2 className={styles["address"]}>{texts.homeBanner_address_text}</h2>

        <a className={styles["leave-details-btn"]} href="#leads-form">
          {texts.leaveDetails_btn_text}
        </a>
      </div>
    </section>
  );
}

export default BannerHome;
