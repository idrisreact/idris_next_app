import { createGlobalStyle, DefaultTheme } from "styled-components";

interface Theme extends DefaultTheme {
  light: ThemeProps;
  dark: ThemeProps;
}
interface ThemeProps {
  background: string;
  text: string;
  primaryColor: string;
  secondaryColor?: string;
}

export const theme: Theme = {
  light: {
    background: "#FFFFFF",
    text: "#000000",
    primaryColor: "",
    secondaryColor: "#FC7A57",
  },
  dark: {
    background: "#000000",
    text: "#FFFFFF",
    // change colour theme in future as it matches light mode
    primaryColor: "",
    secondaryColor: "#FC7A57",
  },
};
interface GlobalStyleProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  /* Reset CSS */

  body {
   background-color: #0D1821;
   color: #fff; 
   font-family: sans-serif; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


`;
