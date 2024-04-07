import "styles/globals.scss";
import Providers from "components/Providers/Providers";
import Popups from "popups/popup";
import Notifications from "components/Notifications/notifications";
import ScreenLoader from "components/ScreenLoader/ScreenLoader";

export default function RootLayout({ children }) {
  const fonts = ["Regular", "Medium", "SemiBold", "Bold", "Light"];
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {fonts.map((font) => {
        return (
          <link
            rel="preload"
            href={`/assets/fonts/OpenSans-${font}.ttf`}
            as="font"
            crossOrigin=""
            key={font}
          />
        );
      })}

      <head />

      <body className="">
        <Providers>
          {children}

          <Popups />
          <Notifications />
          <ScreenLoader />
        </Providers>
      </body>
    </html>
  );
}
