import Header from "@/components/Header/Header";
import { GlobalStyle, theme } from "@/styles/global.style";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme.dark}>
        <GlobalStyle />
        <Header>
          <Component {...pageProps} />
        </Header>
      </ThemeProvider>
    </>
  );
}
