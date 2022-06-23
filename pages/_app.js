import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import {theme} from "../components/Atoms/Theme/theme";
function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider  theme={theme}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;





