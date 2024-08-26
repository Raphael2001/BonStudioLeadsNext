import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { unstable_setRequestLocale } from "next-intl/server";

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
}
