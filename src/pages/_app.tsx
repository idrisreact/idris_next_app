import { GlobalStyle, theme } from "@/styles/global.style";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { ThemeProvider } from "styled-components";

import "../styles/tailwind.css";

type MyPageProps = AppProps & {
  example: string;
};

const MyApp = ({ Component, pageProps, example }: MyPageProps) => {
  return (
    <>
      <ThemeProvider theme={theme.dark}>
        <GlobalStyle />
        <h1>{example}</h1>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext): Promise<any> => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, example: "idris cooks" };
};

export default MyApp;
