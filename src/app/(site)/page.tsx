import ApiServer from "api/requests/server";
import styles from "./home.module.scss";
import BannerHome from "components/HomeBanner/HomeBanner";
import AboutUs from "components/AboutUs/AboutUs";
import Header from "components/Header/Header";
import LeadsForm from "components/LeadsForm/LeadsForm";
import Wave from "/public/assets/waves/wave-upsidedown.svg";
import { Metadata } from "next";
import MetaTagsData from "components/MetaTagsData/MetaTagsData";
import Footer from "components/Footer/Footer";

async function init() {
  const res = await ApiServer.init({});
  const json = await res.json();

  return json;
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = { route: "/", lang_id: "he" };

  const res = await ApiServer.metaTags({ payload });
  const json = await res.json();
  const body = json.body;

  return body;
}

export default async function Home() {
  const res = await init();

  const body = res.body;

  const texts = body.texts;

  return (
    <>
      <MetaTagsData />
      <main className={styles.main}>
        <Header logo={body.logo} />
        <BannerHome media={body.homeBanner} texts={texts} />
        <AboutUs texts={texts} />
        <div className={styles["wave"]}>
          <img src={Wave.src} alt="wave" />
        </div>
        <LeadsForm texts={texts} />
        <Footer />
      </main>
    </>
  );
}
