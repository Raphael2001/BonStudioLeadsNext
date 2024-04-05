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
          <h2 className={styles["subtitle"]}>{texts.homeBanner_subtitle}</h2>
        </div>

        <h4 className={styles["address"]}>{texts.homeBanner_address_text}</h4>

        <button className={styles["leave-details-btn"]}>
          {texts.leaveDetails_btn_text}
        </button>
      </div>
    </section>
  );
}

export default BannerHome;
