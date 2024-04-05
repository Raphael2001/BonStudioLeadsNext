import ApiServer from "api/requests/server";
import styles from "./home.module.scss";
import BannerHome from "components/HomeBanner/HomeBanner";
import AboutUs from "components/AboutUs/AboutUs";
import Header from "components/Header/Header";
import LeadsForm from "components/LeadsForm/LeadsForm";
import Wave from "/public/assets/waves/wave-upsidedown.svg";

async function init() {
  const res = await ApiServer.init({});
  const json = await res.json();

  return json;
}

export default async function Home() {
  const res = await init();

  const body = res.body;

  const texts = body.texts;

  return (
    <main className={styles.main}>
      <Header logo={body.logo} />
      <BannerHome media={body.homeBanner} texts={texts} />
      <AboutUs texts={texts} />
      <div className={styles["wave"]}>
        <img src={Wave.src} alt="wave" />
      </div>
      <LeadsForm texts={texts} />
    </main>
  );
}
