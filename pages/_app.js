import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import useSWR, { SWRConfig } from 'swr'

import {theme} from "../components/Atoms/Theme/theme";
function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider  theme={theme}>
                <SWRConfig
      value={{
        // refreshInterval: 1000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Component {...pageProps} />
      </SWRConfig>
    </NativeBaseProvider>
  );
}

export default MyApp;





